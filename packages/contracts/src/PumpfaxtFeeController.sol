// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;
import "./PumpFRAX.sol";

contract PumpfaxtFeeController {
    PumpFRAX public immutable pFrax;
    uint256 private immutable one_pFrax;

    uint256 public pFraxMetaTransferLt100Fee_FLAT;
    uint256 public pFraxMetaTransferGte100Fee_FLAT;

    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    constructor(address pFRAX_) {
        pFrax = PumpFRAX(pFRAX_);
        one_pFrax = 10 ** pFrax.decimals();

        pFraxMetaTransferLt100Fee_FLAT = one_pFrax / 1000; // 0.001 pFrax
        pFraxMetaTransferGte100Fee_FLAT = one_pFrax / 100; // 0.01 pFrax
    }

    function submitFee(uint256 amount, bytes32 purpose_) external {
        pFrax.transferFrom(msg.sender, address(this), amount);

        emit FeeCollected(msg.sender, amount, purpose_);
    }
}
