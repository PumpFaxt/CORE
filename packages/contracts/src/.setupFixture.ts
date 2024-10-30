import runtime from "../runtime.local.ts";

export async function setupFixture() {
  const [owner, acc1, acc2] = runtime.clients;

  const frax = await runtime.deployContract("DummyFrax", []);

  const master = await runtime.deployContract("PumpfaxtMaster", [
    frax.address,
  ]);

  const pFrax = runtime.getContract(
    "PumpFRAX",
    await master.read.pFrax(),
  );
  const adminRegistry = runtime.getContract(
    "AdminRegistry",
    await master.read.adminRegistry(),
  );
  const relayManager = runtime.getContract(
    "RelayManager",
    await master.read.relayManager(),
  );
  const feeController = runtime.getContract(
    "PumpFRAX",
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
    adminRegistry,
    relayManager,
    feeController,
  };
}
