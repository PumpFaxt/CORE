// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpFRAX.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract PumpfaxtFeeController {
    uint256 public pFraxMetaTransferLt100Fee_FLAT;
    uint256 public pFraxMetaTransferGte100Fee_FLAT;

    IPumpfaxtMaster private immutable _master;

    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    constructor() {
        _master = IPumpfaxtMaster(msg.sender);
    }

    function submitFee(uint256 amount, bytes32 purpose_) external {
        _master.pFrax().transferFrom(msg.sender, address(this), amount);

        emit FeeCollected(msg.sender, amount, purpose_);
    }
}
