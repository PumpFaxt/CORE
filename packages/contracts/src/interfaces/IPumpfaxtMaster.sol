// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IRelayManager.sol";
import "./IPumpfaxtFeeController.sol";
import "./IPFrax.sol";

interface IPumpfaxtMaster {
    function one_pFrax() external view returns (uint256);

    function frax() external view returns (IERC20);

    function pFrax() external view returns (IPFrax);

    function relayManager() external view returns (IRelayManager);

    function feeController() external view returns (IPumpfaxtFeeController);

    function executeMetaTx(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) external returns (bool);

    function getPFraxForTokenPurchaseFrom(
        address from_,
        uint256 amount_
    ) external;

    function getPFraxForFees(address from_, uint256 amount_) external;

    function newTokenStartingVirtualReserve() external view returns (uint256);

    function newTokenStartingSupply() external view returns (uint256);
}
