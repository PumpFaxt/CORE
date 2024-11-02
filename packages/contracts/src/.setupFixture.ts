import runtime from "../runtime.local.ts";

export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const frax = await runtime.deployContract("DummyFrax", []);

  const pFrax = await runtime.deployContract("PFrax", [frax.address]);

  const master = await runtime.deployContract("PumpfaxtMaster", [
    pFrax.address,
  ]);

  await pFrax.write.setPumpfaxtMaster([master.address]);
  await frax.write.approve([pFrax.address, await frax.read.totalSupply()]);

  await master.write.setNewTokenParams([100_000n, 1_000_000_000n]);

  const relayManager = runtime.getContract(
    "RelayManager",
    await master.read.relayManager(),
  );
  const feeController = runtime.getContract(
    "PumpfaxtFeeController",
    await master.read.feeController(),
  );

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
