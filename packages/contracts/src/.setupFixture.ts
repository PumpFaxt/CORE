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

  const relayManager = runtime.getContract(
    "RelayManager",
    await master.read.relayManager(),
  );
  const feeController = runtime.getContract(
    "PumpfaxtFeeController",
    await master.read.feeController(),
  );

  const publicClient = runtime.publicClient;

  return {
    owner,
    acc1,
    acc2,
    publicClient,
    frax,
    master,
    pFrax,
    relayManager,
    feeController,
  };
}
