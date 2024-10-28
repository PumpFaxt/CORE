// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IPumpFRAX.sol";
import "./interfaces/IPumpfaxtMaster.sol";

contract PumpFRAX is ERC20, Ownable {
    IPumpfaxtMaster private immutable _master;
    IERC20 public immutable frax;

    constructor(address frax_) ERC20("PumpFRAX", "pFRAX") Ownable(msg.sender) {
        _master = IPumpfaxtMaster(msg.sender);
        frax = IERC20(frax_);
    }

    function mint(address to_, uint256 amount_) external onlyOwner {
        _mint(to_, amount_);
    }

    function fraxReserve() external view returns (uint256) {
        return frax.balanceOf(address(this));
    }

    function metaTransfer(
        address from_,
        address to_,
        uint256 value_,
        bytes calldata signature_
    ) external {
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

    function metaApprove(
        address from_,
        address spender_,
        uint256 value_,
        bytes calldata signature_
    ) external {
        bytes32 functionDataHash = keccak256(
            abi.encodePacked(spender_, value_)
        );
        bool validExecution = _master.forwarderRegistry().execute(
            from_,
            "approve",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by ForwarderRegistry"
        );
        _approve(from_, spender_, value_);
    }
}
