// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "./PumpfaxtMaster.sol";

contract PumpfaxtToken is ERC20, ERC20Permit {
    IERC20 public immutable frxUsd;
    PumpfaxtMaster private _master;

    uint256 private _virtualReserve;

    uint8 private immutable _decimals;

    address public creator;
    string public uri;
    bool public isTrading = true;


    modifier onlyMaster() {
        require(
            msg.sender == address(_master),
            "Only master can call this method"
        );
        _;
    }

    constructor(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) ERC20(name_, symbol_) ERC20Permit(name_) {
        _master = PumpfaxtMaster(msg.sender);

        frxUsd = _master.frxUsd();
        _decimals = _master.frxDecimals();

        creator = creator_;
        uri = uri_;

        _mint(address(_master), _master.initialSupply() * (10 ** _decimals));
        _virtualReserve = _master.frxUsdTarget() * _master.frxDECIMALS();
    }

    function disableTrading() external onlyMaster {
        isTrading = false;
    }

    function calculateAmountOut(uint256 fraxIn_) public view returns (uint256) {
        uint256 numerator = balanceOf(address(_master)) * fraxIn_;
        uint256 denominator = _virtualReserve +
            frxUsd.balanceOf(address(_master)) +
            fraxIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function calculateFrxUsdOut(
        uint256 amountIn_
    ) public view returns (uint256) {
        uint256 numerator = _virtualReserve +
            frxUsd.balanceOf(address(_master)) *
            amountIn_;
        uint256 denominator = balanceOf(address(_master)) + amountIn_;

        require(denominator < numerator, "Mathematical overflow");
        require(denominator != 0, "Division by zero");

        return numerator / denominator;
    }

    function masterTransferFrom(
        address from_,
        address to_,
        uint256 amount_
    ) external onlyMaster {
        _transfer(from_, to_, amount_);
    }
}
