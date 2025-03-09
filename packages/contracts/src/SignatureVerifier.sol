// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract SignatureVerifier {
    function verifySignature(
        address signer_,
        bytes32 messageHash_,
        bytes calldata signature_
    ) public pure returns (bool) {
        return recoverSigner(messageHash_, signature_) == signer_;
    }

    function recoverSigner(
        bytes32 messageHash_,
        bytes calldata signature_
    ) private pure returns (address) {
        bytes32 ethSignedMessageHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash_)
        );

        (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature_);
        return ecrecover(ethSignedMessageHash, v, r, s);
    }

    function splitSignature(
        bytes memory sig_
    ) private pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig_.length == 65, "invalid signature length");
        assembly {
            r := mload(add(sig_, 32))
            s := mload(add(sig_, 64))
            v := byte(0, mload(add(sig_, 96)))
        }
    }
}
