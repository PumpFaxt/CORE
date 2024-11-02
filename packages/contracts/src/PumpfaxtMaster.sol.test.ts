import runtime from "../runtime.local.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";
import { metaTxRequest } from "../utils.ts";

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

Deno.test("Should be", async () => {
  const { owner } = await deployFixture();
  expect(owner.account.address).toBeTruthy();
});

Deno.test("Should launch a token, emit Launch and register tokenLaunchedAtBlockNumber", async () => {
  const { master } = await runtime.loadFixture(deployFixture);

  const tokenName = "Test Token";
  const tokenSymbol = "TTK";
  const tokenURI = "ipfs://";

  const initialBlockNumber = await runtime.publicClient.getBlockNumber();
  const initialEventsCount =
    (await runtime.readContractEvents(master, "Launch")).length;

  await master.write.launchToken([tokenName, tokenSymbol, tokenURI]);
  const events = await runtime.readContractEvents(master, "Launch");

  expect(events.length).toBe(initialEventsCount + 1);

  const newTokenAddress = events[events.length - 1].args.token;

  expect(newTokenAddress).toBeDefined();

  const tokenLaunchedAt = await master.read.tokenLaunchedAtBlockNumber([
    newTokenAddress || "0x",
  ]);

  expect(tokenLaunchedAt).toBe(initialBlockNumber + 1n);
});

Deno.test("metaTx: launch", async () => {
  const { owner, acc1: relayer, master } = await runtime
    .loadFixture(deployFixture);

  const req = await metaTxRequest({
    contract: master.address,
    signer: owner,
    functionName: "launchToken",
    args: [
      ["string", "string", "string"],
      ["Test", "Test", "ipfs://test"] as const,
    ],
  });

  await master.write.metaLaunchToken(req, {
    account: relayer.account,
  });
});
