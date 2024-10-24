import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";

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

Deno.test("Should set deployer as forwarder", async () => {
  const { owner, registry } = await runtime.loadFixture(
    deployFixture,
  );

  expect(await registry.read.isValidForwarder([owner.account.address]))
    .toBeTruthy();
});
