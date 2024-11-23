import runtime from "../environment/runtime.ts";
import { parseFrax } from "../utils.ts";

export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const frax = await runtime.deployContract("DummyFrax", []);

  const pFrax = await runtime.deployContract("PFrax", [frax.address]);

  const master = await runtime.deployContract("PumpfaxtMaster", [
    pFrax.address,
  ]);

  await pFrax.write.setPumpfaxtMaster([master.address]);
  await frax.write.approve([pFrax.address, await frax.read.totalSupply()]);

  await master.write.setNewTokenParams([12_000n, 1_000_000_000n]);

  const relayManager = runtime.getContract(
    "RelayManager",
    await master.read.relayManager(),
  );
  const feeController = runtime.getContract(
    "PumpfaxtFeeController",
    await master.read.feeController(),
  );

  await feeController.write.setPFraxMetaTransferLt100Fee_FLAT([
    parseFrax(0.001),
  ]);
  await feeController.write.setPFraxMetaTransferGte100Fee_FLAT([
    parseFrax(0.01),
  ]);
  await feeController.write.setPumpfaxtTokenLaunchFee_FLAT([parseFrax(2)]);
  await feeController.write.setPumpfaxtTokenBuySellFee_FRACTION([1000n]); // 10% fee
  await feeController.write.setPumpfaxtTokenTransferFee_FRACTION([100n]); // 1% fee

  return {
    owner,
    acc1,
    acc2,
    frax,
    master,
    pFrax,
    relayManager,
    feeController,
  };
}
