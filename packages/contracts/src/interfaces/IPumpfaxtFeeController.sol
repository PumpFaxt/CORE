// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

interface IPumpfaxtFeeController {
    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    function submitFee(
        address from_,
        uint256 amount,
        bytes32 purpose_
    ) external;

    function registerFeeForPFraxInteraction(
        address from_,
        uint256 amount_
    ) external;

    function pFraxMetaTransferLt100Fee_FLAT() external view returns (uint256);

    function pFraxMetaTransferGte100Fee_FLAT() external view returns (uint256);

    function pumpfaxtTokenLaunchFee_FLAT() external view returns (uint256);

    function pumpfaxtTokenBuySellFee_FRACTION() external view returns (uint256);

    function pumpfaxtTokenTransferFee_FRACTION()
        external
        view
        returns (uint256);
}
