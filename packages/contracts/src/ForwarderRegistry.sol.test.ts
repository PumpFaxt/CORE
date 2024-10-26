import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";
import * as viem from "viem";

async function deployFixture() {
  const [owner, acc1] = runtime.clients;

  const registry = await runtime.deployContract("ForwarderRegistry", []);

  const publicClient = runtime.publicClient;

  return {
    owner,
    acc1,
    registry,
    publicClient,
  };
}

Deno.test("Registers Deployer as a forwarder", async () => {
  const { owner, registry } = await runtime.loadFixture(deployFixture);

  expect(await registry.read.isValidForwarder([owner.account.address]))
    .toBeTruthy();
});

Deno.test("validate", async () => {
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
    "transfer",
    msg,
    sig,
  ]);

  expect(result).toBeTruthy();
});
