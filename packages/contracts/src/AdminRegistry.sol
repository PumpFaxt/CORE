// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "./AuxillaryList.sol";
import "./interfaces/IAdminRegistry.sol";

contract AdminRegistry is IAdminRegistry {
    AuxillaryList private immutable _admins;

    modifier onlyAdmin() {
        require(
            _admins.contains(msg.sender),
            "Only Admins are allowed to call this method"
        );
        _;
    }

    constructor() {
        _admins = new AuxillaryList();
        _admins.add(msg.sender);
    }

    function addAdmin(address address_) external onlyAdmin {
        _admins.safeAdd(address_);
    }

    function removeAdmin(address address_) external onlyAdmin {
        require(_admins.indexOf(msg.sender) < _admins.indexOf(address_)); // Ensures that new admins can not remove older admins
        _admins.safeRemove(address_);
    }

    function isAdmin(address address_) external view returns (bool) {
        return _admins.contains(address_);
    }

    function admins() external view returns (address[] memory) {
        return _admins.getAll();
    }
}
