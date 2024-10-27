// deno-lint-ignore-file
import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";
import { setupFixture } from "./.setupFixture.ts";
import * as viem from "viem";

async function deployFixture() {
  const { master, owner, acc1, acc2, forwarderRegistry, masterTx } =
    await runtime
      .loadFixture(
        setupFixture,
      );

  return {
    owner,
    acc1,
    acc2,
    registry: forwarderRegistry,
    master,
    masterTx,
  };
}

Deno.test("Should register deployer as a forwarder", async () => {
  const { master, registry } = await runtime.loadFixture(deployFixture);

  expect(await registry.read.isValidForwarder([master.address]))
    .toBeTruthy();
});

Deno.test("Should validate function call digest signatures", async () => {
  const { owner, acc1, registry } = await runtime.loadFixture(deployFixture);

  const msg = viem.keccak256(
    viem.encodePacked(["uint", "address"], [234n, viem.zeroAddress]),
  );

  const digest = viem.keccak256(
    viem.encodePacked(["address", "address", "string", "bytes32", "uint"], [
      acc1.account.address,
      owner.account.address,
      "transfer",
      msg,
      0n,
    ]),
  );

  const sig = await acc1.signMessage({
    message: { raw: viem.hexToBytes(digest) },
  });
  const result = await registry.read.validate([
    acc1.account.address,
    owner.account.address,
    "transfer",
    msg,
    sig,
  ]);

  expect(result).toBeTruthy();
});

Deno.test("Should allow an admin to register a forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);
  await registry.write.registerForwarder([acc1.account.address]);

  const forwarderList = await registry.read.getForwarders();
  expect(forwarderList).toContain(acc1.account.address);
});

Deno.test("Should not allow non-admin to register a forwarder", async () => {
  const { acc1, acc2, registry } = await runtime.loadFixture(deployFixture);

  await runtime.expectContractFunctionExecutionError(
    registry.write.registerForwarder([acc1.account.address], {
      account: acc2.account,
    }),
  );
});

Deno.test("Should not allow duplicates to be registered as forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);
  await registry.write.registerForwarder([acc1.account.address]);
  await runtime.expectContractFunctionExecutionError(
    registry.write.registerForwarder([acc1.account.address]),
    "Address already exists",
  );
});

Deno.test("Should allow an admin to remove a forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  await registry.write.registerForwarder([acc1.account.address]);
  await registry.write.removeForwarder([acc1.account.address]);

  const forwarderList = await registry.read.getForwarders();
  expect(forwarderList).not.toContain(acc1.account.address);
});

Deno.test("Should not allow non-admin to remove a forwarder", async () => {
  const { acc1, acc2, registry } = await runtime.loadFixture(deployFixture);

  await runtime.expectContractFunctionExecutionError(
    registry.write.removeForwarder([acc1.account.address], {
      account: acc2.account,
    }),
  );
});

Deno.test("Should not remove a non-existent forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  await runtime.expectContractFunctionExecutionError(
    registry.write.removeForwarder([acc1.account.address]),
    "Address does not exist",
  );
});

Deno.test("Should return true for a registered forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  await registry.write.registerForwarder([acc1.account.address]);

  const isValid = await registry.read.isValidForwarder([acc1.account.address]);
  expect(isValid).toBeTruthy();
});

Deno.test("Should return false for a non-registered forwarder", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  const isValid = await registry.read.isValidForwarder([acc1.account.address]);
  expect(isValid).toBeFalsy();
});

Deno.test("Should return false for an address that has been removed", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  await registry.write.registerForwarder([acc1.account.address]);
  await registry.write.removeForwarder([acc1.account.address]);

  const isValid = await registry.read.isValidForwarder([acc1.account.address]);
  expect(isValid).toBeFalsy();
});

Deno.test("Should reflect the current state after removing forwarders", async () => {
  const { acc1, registry } = await runtime.loadFixture(deployFixture);

  await registry.write.registerForwarder([acc1.account.address]);

  let forwarderList = await registry.read.getForwarders();
  expect(forwarderList).toContain(acc1.account.address);

  await registry.write.removeForwarder([acc1.account.address]);

  forwarderList = await registry.read.getForwarders();
  expect(forwarderList).not.toContain(acc1.account.address);
});
