// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ForwarderRegistry.sol";

contract PumpFRAX is ERC20 {
    ForwarderRegistry private _forwarderRegistry;

    constructor(address forwarderRegistry_) ERC20("PumpFRAX", "pFRAX") {
        _forwarderRegistry = ForwarderRegistry(forwarderRegistry_);
    }

    function metaTransfer(address to_, uint256 value_) public {
        transfer(to_, value_);
    }
}
