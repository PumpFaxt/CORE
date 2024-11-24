import runtime from "../environment/runtime.ts";
import { parseFrax } from "../utils.ts";
import { setupFixture } from "./.setupFixture.ts";
import { expect } from "@std/expect";
import * as viem from "viem";

const TOKEN_NAME = "Testing Token";
const TOKEN_SYMBOL = "TEST";
const TOKEN_URI = "ipfs://test";
const ONE_TOKEN = 1_000_000_000_000_000_000n;

async function deployFixture() {
  const { owner, master, acc1, acc2, pFrax, feeController } = await runtime
    .loadFixture(
      setupFixture,
    );

  await master.write.launchToken(
    [TOKEN_NAME, TOKEN_SYMBOL, TOKEN_URI],
  );

  const logs = await runtime.readContractEvents(master, "Launch");
  const tokenAddress = logs[0].args.token;

  if (tokenAddress === undefined || !viem.isAddress(tokenAddress)) {
    throw new Error("Failed to deploy token");
  }

  const token = runtime.getContract("PumpfaxtToken", tokenAddress);

  // Give everyone pFrax and approve the master
  await pFrax.write.buy([owner.account.address, parseFrax(100_000)]);
  await pFrax.write.buy([acc1.account.address, parseFrax(100_000)]);
  await pFrax.write.buy([acc2.account.address, parseFrax(100_000)]);

  await pFrax.write.approve([master.address, parseFrax(100_000)], {
    account: owner.account,
  });
  await pFrax.write.approve([master.address, parseFrax(100_000)], {
    account: acc1.account,
  });
  await pFrax.write.approve([master.address, parseFrax(100_000)], {
    account: acc2.account,
  });

  return {
    owner,
    acc1,
    acc2,
    token,
    master,
    pFrax,
    feeController,
  };
}

Deno.test("Should deploy with correct parameters", async () => {
  const { token } = await runtime.loadFixture(deployFixture);

  expect(await token.read.name()).toBe(TOKEN_NAME);
  expect(await token.read.symbol()).toBe(TOKEN_SYMBOL);
  expect(await token.read.uri()).toBe(TOKEN_URI);
});

Deno.test("Should have correct initial supply (PumpfaxtMaster.newTokenStartingSupply) and mint all to itself", async () => {
  const { token, master } = await runtime.loadFixture(deployFixture);

  const supply = await token.read.totalSupply();

  expect(supply / ONE_TOKEN).toBe(
    await master.read.newTokenStartingSupply(),
  );

  expect(await token.read.balanceOf([token.address])).toBe(supply);
});

Deno.test("Should start trading with a non zero price", async () => {
  const { token } = await runtime.loadFixture(deployFixture);

  expect(await token.read.tokenPrice()).toBeGreaterThan(0);
});

Deno.test("Should transfer tokens to buyer, pFrax to contract & fees to PumpfaxtFeeController on `Buy`", async () => {
  const { token, pFrax, owner, feeController } = await runtime.loadFixture(
    deployFixture,
  );

  const fraxIn = parseFrax(1_000);
  const amountOutMin = await token.read.calculateAmountOut([999n]);
  await pFrax.write.approve([token.address, fraxIn * 20n], {
    account: owner.account,
  });

  await token.write.buy([fraxIn, amountOutMin]);

  const tokenBalance = await token.read.balanceOf([owner.account.address]);
  expect(tokenBalance).toBeGreaterThanOrEqual(Number(amountOutMin));

  const fee = await feeController.read.pumpfaxtTokenBuySellFee_FRACTION();
  const feeBalance = await pFrax.read.balanceOf([feeController.address]);
  expect(feeBalance).toBe(fraxIn / fee);

  const tokenFraxBalance = await pFrax.read.balanceOf([token.address]);
  expect(tokenFraxBalance).toBe(fraxIn - (fraxIn / fee));
});

Deno.test("Should consistently increase price after repeated buying", async () => {
  const { token, pFrax, owner } = await runtime.loadFixture(deployFixture);

  let currentPrice = await token.read.tokenPrice();

  const fraxIn = parseFrax(1_000);
  const amountOutMin = await token.read.calculateAmountOut([999n]);

  const fraxBalance = await pFrax.read.balanceOf([owner.account.address]);
  expect(fraxBalance).toBeGreaterThan(Number(fraxIn) * 20);

  await pFrax.write.approve([token.address, fraxIn * 20n], {
    account: owner.account,
  });

  await token.write.buy([fraxIn, amountOutMin]);
  let newPrice = await token.read.tokenPrice();
  await runtime.sleep(1000);

  expect(Number(newPrice)).toBeGreaterThan(Number(currentPrice));

  currentPrice = newPrice;
  await token.write.buy([fraxIn, amountOutMin]);
  newPrice = await token.read.tokenPrice();
  await runtime.sleep(1000);

  expect(Number(newPrice)).toBeGreaterThan(Number(currentPrice));

  currentPrice = newPrice;
  await token.write.buy([fraxIn, amountOutMin]);
  newPrice = await token.read.tokenPrice();
  await runtime.sleep(1000);

  expect(Number(newPrice)).toBeGreaterThan(Number(currentPrice));
});
