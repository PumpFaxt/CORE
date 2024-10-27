// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpfaxtMaster.sol";
import "./AdminRegistry.sol";
import "./PumpFRAX.sol";
import "./PumpfaxtFeeController.sol";
import "./ForwarderRegistry.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PumpfaxtMaster {
    IERC20 public immutable frax;
    PumpFRAX public immutable pFrax;

    AdminRegistry public immutable adminRegistry;
    ForwarderRegistry public immutable forwarderRegistry;

    PumpfaxtFeeController public immutable feeController;

    constructor(address frax_) {
        frax = IERC20(frax_);
        pFrax = new PumpFRAX();

        adminRegistry = new AdminRegistry();
        adminRegistry.addAdmin(msg.sender);

        forwarderRegistry = new ForwarderRegistry();

        feeController = new PumpfaxtFeeController();
    }
}
