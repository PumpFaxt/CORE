import runtime from "../environment/runtime.ts";
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

Deno.test("Should allow Owner to set new token starting virtual reserve and starting supply", async () => {
  const { master } = await runtime.loadFixture(deployFixture);

  const newVirtualReserve = 3n;
  const newSupply = 2n;

  await master.write.setNewTokenParams([newVirtualReserve, newSupply]);

  const updatedVirtualReserve = await master.read
    .newTokenStartingVirtualReserve();
  const updatedSupply = await master.read.newTokenStartingSupply();

  expect(updatedVirtualReserve).toEqual(newVirtualReserve);
  expect(updatedSupply).toEqual(newSupply);
});
