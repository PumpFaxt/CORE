// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

interface IForwarderRegistry {
    function isValidForwarder(address address_) external view returns (bool);

    function getNonce() external view returns (uint256);

    function execute(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) external returns (bool);
}
