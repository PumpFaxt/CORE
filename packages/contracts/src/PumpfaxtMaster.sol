// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IPumpfaxtMaster.sol";
import "./interfaces/IPFrax.sol";
import "./PumpfaxtFeeController.sol";
import "./PumpfaxtToken.sol";
import "./RelayManager.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PumpfaxtMaster is Ownable {
    IERC20 public immutable frax;
    IPFrax public immutable pFrax;

    RelayManager public immutable relayManager;

    PumpfaxtFeeController public immutable feeController;

    uint256 public immutable one_pFrax;

    uint256 public newTokenStartingVirtualReserve;
    uint256 public newTokenStartingSupply;

    mapping(address => uint256) private _tokenLaunchedAtBlockNumber;

    event Launch(address indexed creator, address token);

    constructor(address pFrax_) Ownable(msg.sender) {
        pFrax = IPFrax(pFrax_);
        one_pFrax = 10 ** pFrax.decimals();

        frax = pFrax.frax();

        relayManager = new RelayManager();

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

        emit Launch(creator_, address(newToken));
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
        bool validExecution = relayManager.execute(
            creator_,
            address(this),
            "launchToken",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        _launchToken(msg.sender, name_, symbol_, uri_);
    }

    function tokenLaunchedAtBlockNumber(
        address token_
    ) external view returns (uint256) {
        return _tokenLaunchedAtBlockNumber[token_];
    }

    function getPFraxForTokenPurchaseFrom(
        address from_,
        uint256 amount_
    ) external {
        require(
            _tokenLaunchedAtBlockNumber[msg.sender] > 0,
            "Only Token Contracts can call this method"
        );

        pFrax.transferFrom(from_, msg.sender, amount_);
    }

    function executeMetaTx(
        address from_,
        string memory functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) public returns (bool) {
        bool flag = false;

        if (_tokenLaunchedAtBlockNumber[msg.sender] > 0) flag = true;
        if (msg.sender == address(pFrax)) flag = true;

        require(flag, "Not allowed to execute meta tx");

        bool valid = relayManager.execute(
            from_,
            msg.sender,
            functionName_,
            functionDataHash_,
            signature_
        );

        return valid;
    }

    function getPFraxForFees(address from_, uint256 amount_) external {
        require(
            msg.sender == address(feeController),
            "Only Fee Controller can call this method"
        );

        pFrax.transferFrom(from_, msg.sender, amount_);
    }

    function setNewTokenParams(
        uint256 newTokenStartingVirtualReserve_,
        uint256 newTokenStartingSupply_
    ) external onlyOwner {
        newTokenStartingSupply = newTokenStartingVirtualReserve_;
        newTokenStartingSupply = newTokenStartingSupply_;
    }
}
