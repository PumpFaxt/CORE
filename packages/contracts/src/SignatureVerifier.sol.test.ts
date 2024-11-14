import runtime from "../environment/runtime.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";
import * as viem from "viem";

async function deployFixture() {
  const { owner, acc1 } = await runtime
    .loadFixture(
      setupFixture,
    );

  const signatureVerifier = await runtime.deployContract(
    "SignatureVerifier",
    [],
  );

  return {
    owner,
    acc1,
    signatureVerifier,
  };
}

Deno.test("Should verify a valid signature", async () => {
  const { owner, signatureVerifier } = await runtime.loadFixture(
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
  expect(isValid).toBeTruthy();
});

Deno.test("Should not validate an invalid signature", async () => {
  const { owner, acc1, signatureVerifier } = await runtime.loadFixture(
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

  expect(isValid).toBeFalsy();
});
