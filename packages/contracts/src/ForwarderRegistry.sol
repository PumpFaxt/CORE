// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

contract ForwarderRegistry {
    address[] private _forwarders;
    mapping(address => uint256) private _forwarderIndexes;
    mapping(address => bool) private _forwarderExists;

    mapping(address => uint256) private _nonces;

    modifier onlyForwarder() {
        require(
            _forwarderExists[msg.sender],
            "Only Forwarders are allowed to call this method"
        );
        _;
    }

    constructor() {
        addForwarder(address(0));
        addForwarder(msg.sender);
    }

    function addForwarder(address address_) public {
        require(!_forwarderExists[address_], "Address already exists");

        _forwarders.push(address_);
        _forwarderIndexes[address_] = _forwarders.length - 1;
        _forwarderExists[address_] = true;
    }

    function removeForwarder(address address_) external {
        require(_forwarderExists[address_], "Address does not exist");

        uint256 deletionIndex = _forwarderIndexes[address_];
        uint256 lastIndex = _forwarders.length - 1;

        // Move the last element to the place of the element to be removed
        if (deletionIndex != lastIndex) {
            address lastElement = _forwarders[lastIndex];
            _forwarders[deletionIndex] = lastElement;
            _forwarderIndexes[lastElement] = deletionIndex; // Update the index for the previously last element
        }

        _forwarders.pop();
        delete _forwarderIndexes[address_];
        delete _forwarderExists[address_];
    }

    function isValidForwarder(address address_) external view returns (bool) {
        return _forwarderExists[address_];
    }

    function getNonce() external view returns (uint256) {
        return _nonces[msg.sender];
    }

    function getForwarders() external view returns (address[] memory) {
        return _forwarders;
    }
}
