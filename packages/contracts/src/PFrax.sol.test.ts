// deno-lint-ignore-file
import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";
import * as viem from "viem";
import { metaTxRequest, parseFrax } from "../utils.ts";
import { setupFixture } from "./.setupFixture.ts";

async function deployFixture() {
  const { owner, acc1: relayer, acc2, pFrax, master, feeController } =
    await runtime
      .loadFixture(
        setupFixture,
      );

  const publicClient = runtime.publicClient;

  async function mint(client: viem.WalletClient, amount: number) {
    if (!client.account) {
      throw new Error("Invalid client account, unable to mint");
    }

    await pFrax.write.buy([client.account.address, parseFrax(amount)]);
  }

  return {
    owner,
    relayer,
    acc2,
    pFrax,
    master,
    publicClient,
    mint,
    feeController,
  };
}

Deno.test("Should have initial supply of zero", async () => {
  const { pFrax } = await runtime.loadFixture(deployFixture);

  expect(await pFrax.read.totalSupply()).toBe(0n);
});

Deno.test("metaTx: transfer", async () => {
  const { pFrax, owner, relayer, acc2: holder, mint, feeController } =
    await runtime
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
    account: relayer.account,
  });

  const fee = await feeController.read.pFraxMetaTransferLt100Fee_FLAT();
  expect(await pFrax.read.balanceOf([owner.account.address])).toBe(
    parseFrax(50) - fee,
  );
});

Deno.test("metaTx: approve", async () => {
  const { pFrax, owner, relayer, acc2: holder, mint } = await runtime
    .loadFixture(deployFixture);

  await mint(holder, 100);

  const req = await metaTxRequest({
    contract: pFrax.address,
    signer: holder,
    functionName: "approve",
    args: [
      ["address", "uint"],
      [owner.account.address, parseFrax(50)] as const,
    ],
  });

  await pFrax.write.metaApprove(req, {
    account: relayer.account,
  });

  expect(
    await pFrax.read.allowance([
      holder.account.address,
      owner.account.address,
    ]),
  ).toBe(
    parseFrax(50),
  );
});
