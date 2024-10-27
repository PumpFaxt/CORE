// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

interface IAdminRegistry {
    function addAdmin(address address_) external;

    function removeAdmin(address address_) external;

    function isAdmin(address address_) external view returns (bool);

    function admins() external view returns (address[] memory);
}
