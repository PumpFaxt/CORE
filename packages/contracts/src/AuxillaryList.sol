// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuxillaryList is Ownable {
    address[] private _addresses;
    mapping(address => uint256) private _addressIndexes;
    mapping(address => bool) private _addressExists;

    constructor() Ownable(msg.sender) {}

    function add(address address_) external {
        require(!_addressExists[address_], "Address already exists");

        _addresses.push(address_);
        _addressIndexes[address_] = _addresses.length - 1;
        _addressExists[address_] = true;
    }

    function remove(address address_) external {
        require(_addressExists[address_], "Address does not exist");

        uint256 deletionIndex = _addressIndexes[address_];
        uint256 lastIndex = _addresses.length - 1;

        // Move the last element to the place of the element to be removed
        if (deletionIndex != lastIndex) {
            address lastElement = _addresses[lastIndex];
            _addresses[deletionIndex] = lastElement;
            _addressIndexes[lastElement] = deletionIndex; // Update the index for the previously last element
        }

        _addresses.pop();
        delete _addressIndexes[address_];
        delete _addressExists[address_];
    }

    function contains(address address_) external view returns (bool) {
        return _addressExists[address_];
    }

    function indexOf(address address_) external view returns (uint256) {
        return _addressIndexes[address_];
    }

    function getAll() external view returns (address[] memory) {
        return _addresses;
    }
}
