// deno-lint-ignore-file
import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";

async function deployFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const registry = await runtime.deployContract("ForwarderRegistry", []);

  const publicClient = runtime.publicClient;

  return {
    owner,
    acc1,
    acc2,
    registry,
    publicClient,
  };
}

Deno.test("Registers Deployer as a forwarder", async () => {
  const { owner, registry } = await runtime.loadFixture(deployFixture);

  expect(await registry.read.isValidForwarder([owner.account.address]))
    .toBeTruthy();
});


Deno.test("Should allow admin to add admin", async () => {
  const { acc1, registry } = await runtime.loadFixture(
    deployFixture,
  );
  await registry.write.addAdmin([acc1.account.address]);
  const adminList = await registry.read.admins();
  expect(adminList).toContain(acc1.account.address);

})

Deno.test("Should not allow non admin to add admin", async () => {
  const { acc1, acc2, registry } = await runtime.loadFixture(
    deployFixture,
  );
  await runtime.expectContractFunctionExecutionError(
    registry.write.addAdmin([acc1.account.address], { account: acc2.account }),
  );
})