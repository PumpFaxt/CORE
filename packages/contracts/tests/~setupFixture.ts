import hre from "hardhat";
import { permitERC20PermitRequest } from "~shared";
import { tx } from "../lib/utils";

const runtime = hre.viem;

export async function setupFixture() {
    const [owner, acc1, acc2] = await runtime.getWalletClients();
    const publicClient = await runtime.getPublicClient();

    const frxUsd = await runtime.deployContract("tUSD", []);

    const master = await runtime.deployContract("PumpfaxtMaster", [
        frxUsd.address,
    ]);

    [owner, acc1, acc2].forEach(async (wallet) => {
        await tx(
            frxUsd.write.permit(
                await permitERC20PermitRequest(frxUsd, wallet, master.address),
            ),
        );
    });

    await tx(master.write.setFrxUsdTarget([20_000n]));

    const relayManager = await runtime.getContractAt(
        "RelayManager",
        await master.read.relayManager(),
    );
    const feeController = await runtime.getContractAt(
        "PumpfaxtFeeController",
        await master.read.feeController(),
    );

    await feeController.write.setPumpfaxtTokenLaunchFee_FLAT([5n]);
    await feeController.write.setPumpfaxtTokenBuySellFee_FRACTION([1000n]); // 0.1% fee

    return {
        owner,
        server: owner,
        acc1,
        acc2,
        master,
        frxUsd,
        relayManager,
        feeController,
    };
}
