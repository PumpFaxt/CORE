// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "./PumpfaxtMaster.sol";

contract PumpfaxtFeeController {
    uint256 public pumpfaxtTokenLaunchFee_FLAT;
    uint256 public pumpfaxtTokenBuySellFee_FRACTION;

    PumpfaxtMaster private immutable _master;

    event FeeCollected(
        address indexed from,
        uint256 amount,
        bytes32 indexed purpose
    );

    modifier onlyMaster() {
        require(
            msg.sender == address(_master),
            "Only master can call this method"
        );
        _;
    }

    modifier onlyAdmin() {
        require(
            msg.sender == address(_master.owner()),
            "Only admin can call this method"
        );
        _;
    }

    constructor() {
        _master = PumpfaxtMaster(msg.sender);
    }

    function registerFee(
        address from_,
        uint256 amount_,
        bytes32 purpose_
    ) external onlyMaster {
        emit FeeCollected(from_, amount_, purpose_);
    }

    function setPumpfaxtTokenLaunchFee_FLAT(
        uint256 newFee_
    ) external onlyAdmin {
        pumpfaxtTokenLaunchFee_FLAT = newFee_;
    }

    function setPumpfaxtTokenBuySellFee_FRACTION(
        uint256 newFee_
    ) external onlyAdmin {
        pumpfaxtTokenBuySellFee_FRACTION = newFee_;
    }

    function transfer(
        address token_,
        address to_,
        uint256 amount_
    ) external onlyAdmin {
        IERC20(token_).transfer(to_, amount_);
    }
}
