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

Deno.test("Registers Deployer as a forwarder", async () => {
  const { owner, registry } = await runtime.loadFixture(deployFixture);

  expect(await registry.read.isValidForwarder([owner.account.address]))
    .toBeTruthy();
});
