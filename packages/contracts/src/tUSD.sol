// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract tUSD is ERC20, ERC20Permit {
    bytes32 public constant PERMIT_TYPEHASH =
        keccak256(
            "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
        );

    constructor() ERC20("frxUsd", "frxUsd") ERC20Permit("frxUsd") {
        _mint(msg.sender, 100_000_000 * (10 ** decimals()));
    }
}
