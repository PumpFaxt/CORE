// deno-lint-ignore-file
import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";
import * as viem from "viem";
import { metaTxRequest, parseFrax } from "../utils.ts";
import { setupFixture } from "./.setupFixture.ts";

async function deployFixture() {
  const { owner, forwarderRegistry, acc1: forwarder, acc2, pFrax, master } =
    await runtime.loadFixture(
      setupFixture,
    );

  await forwarderRegistry.write.addTrustedExecutor([pFrax.address]);
  await forwarderRegistry.write.registerForwarder([
    forwarder.account.address,
  ]);

  const publicClient = runtime.publicClient;

  async function mint(client: viem.WalletClient, amount: number) {
    if (!client.account) {
      throw new Error("Invalid client account, unable to mint");
    }

    await master.write.issuePumpFrax([
      client.account.address,
      parseFrax(amount),
    ]);
  }

  return {
    owner,
    forwarder,
    acc2,
    pFrax,
    publicClient,
    mint,
  };
}

Deno.test("Should have initial supply of zero", async () => {
  const { pFrax } = await runtime.loadFixture(deployFixture);

  expect(await pFrax.read.totalSupply()).toBe(0n);
});

Deno.test("metaTx: transfer", async () => {
  const { pFrax, owner, forwarder, acc2: holder, mint } = await runtime
    .loadFixture(deployFixture);

  await mint(holder, 100);

  const req = await metaTxRequest({
    contract: pFrax.address,
    signer: holder,
    functionName: "transfer",
    args: [
      ["address", "uint"],
      [owner.account.address, parseFrax(50)] as const,
    ],
  });

  await pFrax.write.metaTransfer(req, {
    account: forwarder.account,
  });

  expect(await pFrax.read.balanceOf([owner.account.address])).toBe(
    parseFrax(50),
  );
});
