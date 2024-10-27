// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IPumpFRAX.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract PumpFRAX is ERC20, Ownable {
    IPumpfaxtMaster private immutable _master;

    constructor() ERC20("PumpFRAX", "pFRAX") Ownable(msg.sender) {
        _master = IPumpfaxtMaster(msg.sender);
    }

    function mint(address to_, uint256 amount_) external onlyOwner {
        _mint(to_, amount_);
    }

    function metaTransfer(
        address from_,
        address to_,
        uint256 value_,
        bytes calldata signature_
    ) public {
        bytes32 functionDataHash = keccak256(abi.encodePacked(to_, value_));
        bool validExecution = _master.forwarderRegistry().execute(
            from_,
            "transfer",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by ForwarderRegistry"
        );
        _transfer(from_, to_, value_);
    }
}
