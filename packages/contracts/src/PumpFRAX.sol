// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IForwarderRegistry.sol";

contract PumpFRAX is ERC20 {
    IForwarderRegistry private _forwarderRegistry;

    constructor(address forwarderRegistry_) ERC20("PumpFRAX", "pFRAX") {
        _forwarderRegistry = IForwarderRegistry(forwarderRegistry_);
    }

    function metaTransfer(
        address from_,
        address to_,
        uint256 value_,
        bytes calldata signature_
    ) public {
        bytes32 functionDataHash = keccak256(abi.encodePacked(to_, value_));
        _forwarderRegistry.execute(
            from_,
            "transfer",
            functionDataHash,
            signature_
        );
        _transfer(from_, to_, value_);
    }
}
