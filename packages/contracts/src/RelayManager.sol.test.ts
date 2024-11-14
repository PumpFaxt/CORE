import runtime from "../environment/runtime.ts";
import { metaTxRequest } from "../utils.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";

async function deployFixture() {
  const { owner, relayManager, master } = await runtime
    .loadFixture(
      setupFixture,
    );

  return {
    owner,
    relayManager,
    master,
  };
}

Deno.test("Should increase the nonce after execution", async () => {
  const { owner, relayManager, master } = await runtime.loadFixture(
    deployFixture,
  );

  const nonce = await relayManager.read.getNonce();

  const req = await metaTxRequest({
    signer: owner,
    contract: master.address,
    functionName: "launchToken",
    args: [
      ["string", "string", "string"],
      [
        "test",
        "test",
        "ipfs://test",
      ] as const,
    ],
    nonce,
  });

  await master.write.metaLaunchToken(req);

  expect(await relayManager.read.getNonce()).toBe(nonce + 1n);
});
