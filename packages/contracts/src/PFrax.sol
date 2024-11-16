// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IPumpfaxtFeeController.sol";
import "./interfaces/IPumpfaxtMaster.sol";
import "./interfaces/IPFrax.sol";

interface IFrax is IERC20 {
    function decimals() external view returns (uint8);
}

contract PFrax is IPFrax, ERC20, Ownable {
    IERC20 public immutable frax;
    IPumpfaxtMaster public master;
    uint8 private immutable _decimals;

    constructor(address frax_) ERC20("pFrax", "pFRAX") Ownable(msg.sender) {
        frax = IERC20(frax_);
        _decimals = IFrax(frax_).decimals();
    }

    function setPumpfaxtMaster(address master_) external onlyOwner {
        master = IPumpfaxtMaster(master_);
    }

    function decimals() public view override(ERC20, IPFrax) returns (uint8) {
        return _decimals;
    }

    function buy(address for_, uint256 amount_) external {
        frax.transferFrom(msg.sender, address(this), amount_);
        _mint(for_, amount_);
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
        bool validExecution = master.executeMetaTx(
            from_,
            "transfer",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        require(value_ <= balanceOf(from_), "Insufficient Balance");

        uint256 fee = master.feeController().pFraxMetaTransferLt100Fee_FLAT();
        if (value_ >= 100 * master.one_pFrax()) {
            fee = master.feeController().pFraxMetaTransferGte100Fee_FLAT();
        }

        master.feeController().registerFeeForPFraxInteraction(from_, fee);
        _transfer(from_, to_, value_ - fee);
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
        bool validExecution = master.executeMetaTx(
            from_,
            "approve",
            functionDataHash,
            signature_
        );
        require(
            validExecution,
            "Execution Failed; Invalidated by RelayManager"
        );

        uint256 fee = master.one_pFrax() / 1000;
        master.feeController().registerFeeForPFraxInteraction(from_, fee);

        _approve(from_, spender_, value_);
    }
}
