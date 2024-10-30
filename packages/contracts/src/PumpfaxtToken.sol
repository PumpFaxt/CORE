// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IPumpfaxtMaster.sol";
import "./interfaces/IForwarderRegistry.sol";

contract PumpfaxtToken is ERC20 {
    IERC20 public immutable pFRAX;
    uint256 public immutable one_pFrax;

    uint256 private _virtualReserve;
    uint256 private _tokenPrice;

    uint8 private immutable _decimals;

    IPumpfaxtMaster private _master;
    IForwarderRegistry private _forwarderRegistry;

    modifier updatePriceAndReserve() {
        _;
        _tokenPrice = liquidity() / reserve();
        if (_virtualReserve > 0 && reserve() >= 3 * _virtualReserve) {
            uint256 exactRatioPercentage = (_virtualReserve * 100) / reserve();
            _virtualReserve = 0;
            uint256 supplyToBurn = (reserve() * exactRatioPercentage) / 100;
            _burn(address(this), supplyToBurn);
        }
    }

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) updatePriceAndReserve {
        pFRAX = _master.frax();
        _forwarderRegistry = _master.forwarderRegistry();
        _decimals = ERC20(address(pFRAX)).decimals();

        _mint(address(this), _master.newTokenStartingSupply());
        _virtualReserve = _master.newTokenStartingVirtualReserve();
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    function reserve() public view returns (uint256) {
        return _virtualReserve + balanceOf(address(this));
    }

    function liquidity() public view returns (uint256) {
        return pFRAX.balanceOf(address(this));
    }

    function tokenPrice() public view returns (uint256) {
        return _tokenPrice;
    }

    function calculateAmountOut(uint256 fraxIn_) public view returns (uint256) {
        uint256 numerator = reserve() * fraxIn_;
        uint256 denominator = liquidity() + fraxIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function calculateFraxOut(uint256 amountIn_) public view returns (uint256) {
        uint256 numerator = liquidity() * amountIn_;
        uint256 denominator = reserve() + amountIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function _buy(
        address buyer_,
        uint256 fraxIn_,
        uint256 amountOutMin_
    ) private updatePriceAndReserve {
        require(fraxIn_ > 0, "fraxIn must be greater than 0");
        require(amountOutMin_ > 0, "amountOutMin must be greater than 0");

        uint256 amountOut_ = calculateAmountOut(fraxIn_);
        require(amountOut_ >= amountOutMin_, "Slippage tolerance exceeded");

        _master.getFraxForTokenPurchaseFrom(buyer_, fraxIn_);
        transfer(buyer_, amountOut_);
    }

    function buy(uint256 fraxIn_, uint256 amountOutMin_) external {
        _buy(msg.sender, fraxIn_, amountOutMin_);
    }

    function metaBuy(
        address from_,
        uint256 fraxIn_,
        uint256 amountOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(fraxIn_, amountOutMin_)
        );
        bool validExecution = _master.forwarderRegistry().execute(
            from_,
            "buy",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by ForwarderRegistry"
        );

        _buy(from_, fraxIn_, amountOutMin_);
    }

    function _sell(
        address seller_,
        uint256 amountIn_,
        uint256 fraxOutMin_
    ) private updatePriceAndReserve {
        require(amountIn_ > 0, "fraxIn must be greater than 0");
        require(fraxOutMin_ > 0, "amountOutMin must be greater than 0");

        uint256 fraxOut = calculateFraxOut(amountIn_);
        require(fraxOut >= fraxOutMin_, "Slippage tolerance exceeded");

        _transfer(seller_, address(this), amountIn_);
        pFRAX.transfer(seller_, fraxOut);
    }

    function sell(uint256 amountIn_, uint256 fraxOutMin_) external {
        _sell(msg.sender, amountIn_, fraxOutMin_);
    }

    function metaSell(
        address from_,
        uint256 amountIn_,
        uint256 fraxOutMin_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(amountIn_, fraxOutMin_)
        );
        bool validExecution = _master.forwarderRegistry().execute(
            from_,
            "sell",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by ForwarderRegistry"
        );

        _sell(from_, amountIn_, fraxOutMin_);
    }
}
