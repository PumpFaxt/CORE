import runtime from "../runtime.local.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";

async function deployFixture() {
  const { master, owner, acc1, acc2 } = await runtime
    .loadFixture(
      setupFixture,
    );

  return {
    owner,
    acc1,
    acc2,
    master,
  };
}

// Deployment

Deno.test("Should", async () => {
  const { owner } = await deployFixture();
  expect(owner.account.address).toBeTruthy();
});
