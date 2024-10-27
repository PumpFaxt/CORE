// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpFRAX.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract PumpfaxtFeeController {
    IPumpFRAX public immutable pFrax;
    uint256 private immutable one_pFrax;

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
        pFrax = _master.pFrax();
        one_pFrax = 10 ** pFrax.decimals();

        pFraxMetaTransferLt100Fee_FLAT = one_pFrax / 1000; // 0.001 pFrax
        pFraxMetaTransferGte100Fee_FLAT = one_pFrax / 100; // 0.01 pFrax
    }

    function submitFee(uint256 amount, bytes32 purpose_) external {
        pFrax.transferFrom(msg.sender, address(this), amount);

        emit FeeCollected(msg.sender, amount, purpose_);
    }
}
