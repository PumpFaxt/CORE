// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

interface IRelayManager {
    function getNonce() external view returns (uint256);

    function execute(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) external returns (bool);
}