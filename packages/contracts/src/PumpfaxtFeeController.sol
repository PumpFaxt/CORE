// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpfaxtMaster.sol";

contract PumpfaxtFeeController {
    uint256 public pFraxMetaTransferLt100Fee_FLAT;
    uint256 public pFraxMetaTransferGte100Fee_FLAT;
    uint256 public pumpfaxtTokenLaunchFee_FLAT;
    uint256 public pumpfaxtTokenBuySellFee_FRACTION;
    uint256 public pumpfaxtTokenTransferFee_FRACTION;

    IPumpfaxtMaster private immutable _master;

    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    constructor() {
        _master = IPumpfaxtMaster(msg.sender);
    }

    function submitFee(
        address from_,
        uint256 amount_,
        bytes32 purpose_
    ) external {
        _master.getPFraxForFees(from_, amount_);

        emit FeeCollected(from_, amount_, purpose_);
    }

    function registerFeeForPFraxInteraction(
        address from_,
        uint256 amount_
    ) external {
        require(
            msg.sender == address(_master.pFrax()),
            "Only PFrax interactions can be recorded using this function"
        );

        emit FeeCollected(from_, amount_, keccak256("pFrax Interaction"));
    }

    function setPumpfaxtTokenLaunchFee_FLAT(uint256 newFee_) external {
        pumpfaxtTokenLaunchFee_FLAT = newFee_;
    }

    function setPumpfaxtTokenBuySellFee_FRACTION(uint256 newFee_) external {
        pumpfaxtTokenBuySellFee_FRACTION = newFee_;
    }

    function setPumpfaxtTokenTransferFee_FRACTION(uint256 newFee_) external {
        pumpfaxtTokenTransferFee_FRACTION = newFee_;
    }

    function setPFraxMetaTransferLt100Fee_FLAT(uint256 newFee_) external {
        pFraxMetaTransferLt100Fee_FLAT = newFee_;
    }

    function setPFraxMetaTransferGte100Fee_FLAT(uint256 newFee_) external {
        pFraxMetaTransferGte100Fee_FLAT = newFee_;
    }
}
