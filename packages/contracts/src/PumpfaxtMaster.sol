// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpfaxtMaster.sol";
import "./AdminRegistry.sol";
import "./PumpFRAX.sol";
import "./PumpfaxtFeeController.sol";
import "./PumpfaxtToken.sol";
import "./ForwarderRegistry.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PumpfaxtMaster {
    IERC20 public immutable frax;
    PumpFRAX public immutable pFrax;

    AdminRegistry public immutable adminRegistry;
    ForwarderRegistry public immutable forwarderRegistry;

    PumpfaxtFeeController public immutable feeController;

    uint256 public immutable one_pFrax;

    uint256 public newTokenStartingVirtualReserve;
    uint256 public newTokenStartingSupply;

    mapping(address => uint256) private _tokenLaunchedAtBlockNumber;

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

    function _launchToken(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) private {
        PumpfaxtToken newToken = new PumpfaxtToken(
            creator_,
            name_,
            symbol_,
            uri_
        );
        _tokenLaunchedAtBlockNumber[address(newToken)] = block.number;
    }

    function launchToken(
        string memory name_,
        string memory symbol_,
        string memory uri_
    ) external {
        _launchToken(msg.sender, name_, symbol_, uri_);
    }

    function metaLaunchToken(
        address creator_,
        string memory name_,
        string memory symbol_,
        string memory uri_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(name_, symbol_, uri_)
        );
        bool validExecution = forwarderRegistry.execute(
            creator_,
            "launchToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by ForwarderRegistry"
        );

        _launchToken(msg.sender, name_, symbol_, uri_);
    }

    function tokenLaunchedAtBlockNumber(
        address token_
    ) external view returns (uint256) {
        return _tokenLaunchedAtBlockNumber[token_];
    }

    function getPumpFraxForTokenPurchaseFrom(
        address from_,
        uint256 amount_
    ) external {
        require(
            _tokenLaunchedAtBlockNumber[msg.sender] > 0,
            "Only Token Contracts can call this method"
        );

        pFrax.transferFrom(from_, msg.sender, amount_);
    }

    function getPumpFraxForFees(address from_, uint256 amount_) external {
        require(
            msg.sender == address(feeController),
            "Only Fee Controller can call this method"
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
