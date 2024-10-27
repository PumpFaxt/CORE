// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IPumpFRAX.sol";
import "./IAdminRegistry.sol";
import "./IForwarderRegistry.sol";
import "./IPumpfaxtFeeController.sol";

interface IPumpfaxtMaster {
    function frax() external view returns (IERC20);

    function pFrax() external view returns (IPumpFRAX);

    function adminRegistry() external view returns (IAdminRegistry);

    function forwarderRegistry() external view returns (IForwarderRegistry);

    function feeController() external view returns (IPumpfaxtFeeController);
}
