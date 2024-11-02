// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPumpFRAX is IERC20 {
    function mint(address to_, uint256 amount_) external;

    function metaTransfer(
        address from_,
        address to_,
        uint256 value_,
        bytes calldata signature_
    ) external;
}
