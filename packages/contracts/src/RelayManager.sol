// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "./SignatureVerifier.sol";
import "./AuxillaryList.sol";
import "./PumpfaxtMaster.sol";

contract RelayManager is SignatureVerifier {
    PumpfaxtMaster private immutable _master;

    mapping(address => uint256) private _nonces;

    constructor() {
        _master = PumpfaxtMaster(msg.sender);
    }

    function getNonce() external view returns (uint256) {
        return _nonces[msg.sender];
    }

    function nonceOf(address address_) external view returns (uint256) {
        return _nonces[address_];
    }

    function validate(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) public view returns (bool) {
        uint256 nonce = _nonces[from_];
        bytes32 digest = keccak256(
            abi.encodePacked(
                from_,
                functionName_,
                functionDataHash_,
                nonce
            )
        );
        return verifySignature(from_, digest, signature_);
    }

    function execute(
        address from_,
        string calldata functionName_,
        bytes32 functionDataHash_,
        bytes calldata signature_
    ) external returns (bool) {
        require(
            msg.sender == address(_master),
            "Only PumpfaxtMaster can call this method"
        );
    
        bool valid = validate(
            from_,
            functionName_,
            functionDataHash_,
            signature_
        );

        require(valid, "Invalid Signature or Invalid Execution Request");

        _nonces[from_]++;

        return valid;
    }
}
