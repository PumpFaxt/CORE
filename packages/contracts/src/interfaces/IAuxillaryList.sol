// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

interface IAuxillaryList {
    function add(address address_) external;

    function remove(address address_) external;

    function contains(address address_) external view returns (bool);

    function indexOf(address address_) external view returns (uint256);

    function length() external view returns (uint256);

    function getAll() external view returns (address[] memory);
}
