// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./AuxillaryList.sol";

contract ForwarderRegistry {
    AuxillaryList private _forwarders;
    AuxillaryList private _admins;

    mapping(address => uint256) private _nonces;

    modifier onlyForwarder() {
        require(
            _forwarders.contains(msg.sender),
            "Only Forwarders are allowed to call this method"
        );
        _;
    }

    modifier onlyAdmin() {
        require(
            _admins.contains(msg.sender),
            "Only Admins are allowed to call this method"
        );
        _;
    }

    constructor() {
        _forwarders = new AuxillaryList();
        _admins = new AuxillaryList();

        _admins.add(msg.sender);
        _forwarders.add(msg.sender);
    }

    function addAdmin(address address_) external onlyAdmin {
        _admins.safeAdd(address_);
    }

    function removeAdmin(address address_) external onlyAdmin {
        _admins.safeRemove(address_);
    }

    function admins() external view returns (address[] memory) {
        return _admins.getAll();
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
}
