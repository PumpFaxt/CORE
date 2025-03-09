import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import * as viem from "viem";

describe("SignatureVerifier", function () {
    async function deployFixture() {
        const [owner, acc1] = await hre.viem.getWalletClients();

        const signatureVerifier = await hre.viem.deployContract(
            "SignatureVerifier",
            [],
        );

        return {
            owner,
            acc1,
            signatureVerifier,
        };
    }

    describe("Signature Validation", () => {
        it("Should verify a valid signature", async () => {
            const { owner, signatureVerifier } = await loadFixture(
                deployFixture,
            );

            const message = "Test message";

            const messageHash = viem.keccak256(
                viem.encodePacked(["string"], [message]),
            );

            const signature = await owner.signMessage({
                message: { raw: viem.hexToBytes(messageHash) },
            });

            const isValid = await signatureVerifier.read.verifySignature([
                owner.account.address,
                messageHash,
                signature,
            ]);

            expect(isValid).ok;
        });

        it("Should not validate an invalid signature", async () => {
            const { owner, acc1, signatureVerifier } = await loadFixture(
                deployFixture,
            );

            const message = "Test message";
            const messageHash = viem.keccak256(
                viem.encodePacked(["string"], [message]),
            );
            const signature = await owner.signMessage({
                message: { raw: viem.hexToBytes(messageHash) },
            });

            const isValid = await signatureVerifier.read.verifySignature([
                acc1.account.address,
                messageHash,
                signature,
            ]);

            expect(isValid).not.ok;
        });
    });
});
