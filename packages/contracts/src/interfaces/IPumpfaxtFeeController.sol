// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

interface IPumpfaxtFeeController {
    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    function submitFee(uint256 amount, bytes32 purpose_) external;

    function pFraxMetaTransferLt100Fee_FLAT() external view returns (uint256);

    function pFraxMetaTransferGte100Fee_FLAT() external view returns (uint256);
}