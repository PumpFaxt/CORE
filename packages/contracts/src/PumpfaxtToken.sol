// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract PumpfaxtToken is ERC20 {
    IERC20 public immutable pFRAX;
    uint256 public immutable one_pFrax;

    uint8 private immutable _decimals;

    IPumpfaxtMaster private _master;

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        pFRAX = IERC20(_master.frax());
        _decimals = ERC20(address(pFRAX)).decimals();
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
