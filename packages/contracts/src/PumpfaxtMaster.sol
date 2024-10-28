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

    uint256 public immutable one_pFrax;

    mapping(address => bool) private _launchedTokens;

    modifier onlyAdmin() {
        require(
            adminRegistry.isAdmin(msg.sender),
            "Only Admins are allowed to call this method"
        );
        _;
    }

    constructor(address frax_) {
        frax = IERC20(frax_);
        pFrax = new PumpFRAX(address(frax));
        one_pFrax = 10 ** pFrax.decimals();

        adminRegistry = new AdminRegistry();
        adminRegistry.addAdmin(msg.sender);

        forwarderRegistry = new ForwarderRegistry();

        feeController = new PumpfaxtFeeController();
    }

    function isValidToken(address token_) external view returns (bool) {
        return _launchedTokens[token_];
    }

    function getFraxForTokenPurchaseFrom(
        address from_,
        uint256 amount_
    ) external {
        require(
            _launchedTokens[msg.sender],
            "Only Token Contracts can call this method"
        );
        pFrax.transferFrom(from_, msg.sender, amount_);
    }

    function issuePumpFrax(
        address address_,
        uint256 amount_
    ) external onlyAdmin {
        pFrax.mint(address_, amount_);
    }
}
