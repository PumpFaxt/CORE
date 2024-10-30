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

        pFraxMetaTransferLt100Fee_FLAT = _master.one_pFrax() / 1000;
        pFraxMetaTransferGte100Fee_FLAT = _master.one_pFrax() / 100;
        pumpfaxtTokenLaunchFee_FLAT = _master.one_pFrax() * 2;
        pumpfaxtTokenBuySellFee_FRACTION = 1000;
        pumpfaxtTokenTransferFee_FRACTION = 100;
    }

    function submitFee(
        address from_,
        uint256 amount,
        bytes32 purpose_
    ) external {
        _master.getPumpFraxForFees(from_, amount);

        emit FeeCollected(from_, amount, purpose_);
    }
}
