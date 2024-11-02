// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPFrax is IERC20 {
    function frax() external view returns (IERC20);

    function decimals() external view returns (uint8);
}
