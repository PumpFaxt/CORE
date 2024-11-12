// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IPumpfaxtMaster.sol";
import "./interfaces/IRelayManager.sol";
import "./interfaces/IPumpfaxtFeeController.sol";
import "./interfaces/IPFrax.sol";

contract PumpfaxtToken is ERC20 {
    IPFrax public immutable pFRAX;
    uint256 public immutable one_pFrax;

    uint256 private _virtualReserve;
    uint256 private _tokenPrice;

    uint8 private immutable _decimals;

    address _creator;
    string private _uri;

    IPumpfaxtMaster private _master;
    IPumpfaxtFeeController private _feeController;

    modifier updatePriceAndReserve() {
        _;

        _tokenPrice = (reserve() * one_pFrax) / supply();

        if (_virtualReserve > 0 && reserve() >= 3 * _virtualReserve) {
            uint256 exactRatioPercentage = (_virtualReserve * 100) / supply();
            _virtualReserve = 0;
            uint256 supplyToBurn = (supply() * exactRatioPercentage) / 100;
            _burn(address(this), supplyToBurn);
        }
    }

    constructor(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) ERC20(name_, symbol_) updatePriceAndReserve {
        _master = IPumpfaxtMaster(msg.sender);

        pFRAX = _master.pFrax();
        _decimals = pFRAX.decimals();
        one_pFrax = _master.one_pFrax();

        _feeController = _master.feeController();

        _creator = creator_;
        _uri = uri_;

        _mint(
            address(this),
            _master.newTokenStartingSupply() * (10 ** _decimals)
        );
        _virtualReserve = _master.newTokenStartingVirtualReserve() * one_pFrax;
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    function uri() public view returns (string memory) {
        return _uri;
    }

    function supply() public view returns (uint256) {
        return balanceOf(address(this));
    }

    function reserve() public view returns (uint256) {
        return _virtualReserve + liquidity();
    }

    function liquidity() public view returns (uint256) {
        return pFRAX.balanceOf(address(this));
    }

    function tokenPrice() public view returns (uint256) {
        return _tokenPrice;
    }

    function calculateAmountOut(uint256 fraxIn_) public view returns (uint256) {
        uint256 numerator = supply() * fraxIn_;
        uint256 denominator = reserve() + fraxIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function calculateFraxOut(uint256 amountIn_) public view returns (uint256) {
        uint256 numerator = reserve() * amountIn_;
        uint256 denominator = supply() + amountIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function _buy(
        address buyer_,
        uint256 fraxIn_,
        uint256 amountOutMin_
    ) private updatePriceAndReserve {
        require(fraxIn_ > one_pFrax, "fraxIn must be greater than 1");
        require(amountOutMin_ > 0, "amountOutMin must be greater than 0");

        require(pFRAX.balanceOf(buyer_) >= fraxIn_, "Insufficient Balance");

        uint256 fee = fraxIn_ /
            _feeController.pumpfaxtTokenBuySellFee_FRACTION();

        uint256 amountOut_ = calculateAmountOut(fraxIn_ - fee);
        require(amountOut_ >= amountOutMin_, "Slippage tolerance exceeded");

        _feeController.submitFee(buyer_, fee, keccak256("buyPumpfaxtToken"));
        _master.getPFraxForTokenPurchaseFrom(buyer_, fraxIn_ - fee);
        _transfer(address(this), buyer_, amountOut_);
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
        bool validExecution = _master.executeMetaTx(
            from_,
            "buy",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
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

        uint256 fee = fraxOut /
            _feeController.pumpfaxtTokenBuySellFee_FRACTION();

        _feeController.submitFee(seller_, fee, keccak256("sellPumpfaxtToken"));
        _transfer(seller_, address(this), amountIn_);
        pFRAX.transfer(seller_, fraxOut - fee);
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
        bool validExecution = _master.executeMetaTx(
            from_,
            "sell",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _sell(from_, amountIn_, fraxOutMin_);
    }
}
