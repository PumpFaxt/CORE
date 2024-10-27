// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./interfaces/IForwarderRegistry.sol";
import "./SignatureVerifier.sol";
import "./AuxillaryList.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract ForwarderRegistry is IForwarderRegistry, SignatureVerifier {
    AuxillaryList private immutable _forwarders;
    AuxillaryList private immutable _trustedExecutors;

    IPumpfaxtMaster private immutable _master;

    mapping(address => uint256) private _nonces;

    modifier onlyTrustedExecutor() {
        require(
            _trustedExecutors.contains(msg.sender),
            "Only Forwarders are allowed to call this method"
        );
        _;
    }

    modifier onlyAdmin() {
        require(
            _master.adminRegistry().isAdmin(msg.sender),
            "Only Admins are allowed to call this method"
        );
        _;
    }

    constructor() {
        _forwarders = new AuxillaryList();
        _trustedExecutors = new AuxillaryList();

        _master = IPumpfaxtMaster(msg.sender);

        _forwarders.add(msg.sender);
    }

    function addTrustedExecutor(address address_) external onlyAdmin {
        _trustedExecutors.safeAdd(address_);
    }

    function removeTrustedExecutor(address address_) external onlyAdmin {
        _trustedExecutors.safeRemove(address_);
    }

    function trustedExecutors() external view returns (address[] memory) {
        return _trustedExecutors.getAll();
    }

    function registerForwarder(address address_) external onlyAdmin {
        _forwarders.safeAdd(address_);
    }

    function removeForwarder(address address_) external onlyAdmin {
        _forwarders.safeRemove(address_);
    }

    function isValidForwarder(address address_) external view returns (bool) {
        return _forwarders.contains(address_);
    }

    function getForwarders() external view returns (address[] memory) {
        return _forwarders.getAll();
    }

    function getNonce() external view returns (uint256) {
        return _nonces[msg.sender];
    }

    function nonceOf(address address_) external view returns (uint256) {
        return _nonces[address_];
    }

    function validate(
        address from_,
        address to_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) public view returns (bool) {
        uint256 nonce = _nonces[from_];
        bytes32 digest = keccak256(
            abi.encodePacked(
                from_,
                to_,
                functionName_,
                functionDataHash_,
                nonce
            )
        );
        return verifySignature(from_, digest, signature_);
    }

    function execute(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) external onlyTrustedExecutor returns (bool) {
        bool valid = validate(
            from_,
            msg.sender,
            functionName_,
            functionDataHash_,
            signature_
        );

        require(valid, "Invalid Signature or Invalid Execution Request");

        _nonces[from_]++;

        return valid;
    }
}
