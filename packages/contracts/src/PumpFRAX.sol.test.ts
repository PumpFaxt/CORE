// deno-lint-ignore-file
import runtime from "../runtime.local.ts";
import { expect } from "@std/expect";
import * as viem from "viem";
import { metaTxRequest, parseFrax } from "../utils.ts";

async function deployFixture() {
  const [owner, forwarder, acc2] = runtime.clients;

  const registry = await runtime.deployContract("ForwarderRegistry", []);
  const pFrax = await runtime.deployContract("PumpFRAX", [registry.address]);
  await registry.write.addTrustedExecutor([pFrax.address]);
  await registry.write.registerForwarder([forwarder.account.address]);

  const publicClient = runtime.publicClient;

  async function mint(client: viem.WalletClient, amount: number) {
    if (!client.account) {
      throw new Error("Invalid client account, unable to mint");
    }
    await pFrax.write.mint([client.account.address, parseFrax(amount)]);
  }

  return {
    owner,
    forwarder,
    acc2,
    registry,
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
  const { pFrax, owner, registry, forwarder, acc2: holder, mint } =
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

  const nonceBefore = await registry.read.nonceOf([holder.account.address]);

  await pFrax.write.metaTransfer(req, {
    account: forwarder.account,
  });

  await runtime.expectContractFunctionExecutionError(
    pFrax.write.metaTransfer(req, {
      account: forwarder.account,
    }),
    "Invalid Signature or Invalid Execution Request",
  );

  expect(await registry.read.nonceOf([holder.account.address])).toBe(
    nonceBefore + 1n,
  );
  expect(await pFrax.read.balanceOf([owner.account.address])).toBe(
    parseFrax(50),
  );
});
