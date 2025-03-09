// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract tUSD is ERC20, ERC20Permit {
    bytes32 public constant PERMIT_TYPEHASH =
        keccak256(
            "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
        );

    constructor() ERC20("frxUsd", "frxUsd") ERC20Permit("frxUsd") {
        _mint(msg.sender, 100_000_000 * (10 ** decimals()));
    }

    function getHash(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline
    ) external view returns (bytes32) {
        bytes32 structHash = keccak256(
            abi.encode(
                PERMIT_TYPEHASH,
                owner,
                spender,
                value,
                nonces(owner),
                deadline
            )
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        return hash;
    }

    function splitSignature(
        bytes memory sig_
    ) external pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(sig_.length == 65, "invalid signature length");
        assembly {
            r := mload(add(sig_, 32))
            s := mload(add(sig_, 64))
            v := byte(0, mload(add(sig_, 96)))
        }
    }
}
