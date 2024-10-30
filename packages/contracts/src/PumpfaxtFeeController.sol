// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpFRAX.sol";
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
        uint256 amount,
        bytes32 purpose_
    ) external {
        _master.getPumpFraxForFees(from_, amount);

        emit FeeCollected(from_, amount, purpose_);
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
