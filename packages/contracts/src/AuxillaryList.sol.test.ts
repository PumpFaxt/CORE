import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";

async function deployFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const list = await runtime.deployContract("AuxillaryList", []);

  const publicClient = runtime.publicClient;

  return {
    owner,
    acc1,
    acc2,
    list,
    publicClient,
  };
}

Deno.test("Should set deployer as owner", async () => {
  const { owner, list } = await runtime.loadFixture(
    deployFixture,
  );

  expect(await list.read.owner())
    .toBe(owner.account.address);
});
