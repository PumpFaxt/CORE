import hre from "hardhat";
import { createWalletClient, custom, zeroAddress } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { setDefinition } from "~shared";

type KeyedClient = NonNullable<
    Parameters<typeof hre.viem.deployContract>["2"]
>["client"];

async function main() {
    const networkName = hre.network.name;
    if (networkName === "hardhat") {
        throw new Error(
            "Why are you deploying to hardhat? \nspecify a network with --network",
        );
    }
    const isLocal = networkName === "localhost";

    let client: KeyedClient = undefined;
    if (!isLocal) {
        const pvtKey = Bun.env.PRIVATE_KEY;
        if (!pvtKey) throw new Error("Private key not found");

        client = {
            public: await hre.viem.getPublicClient(),
            wallet: createWalletClient({
                transport: custom(hre.network.provider),
                account: privateKeyToAccount(pvtKey as "0x"),
            }),
        };
    }

    const frxUsd = await hre.viem.deployContract("tUSD", [], { client });
    await frxUsd.write.transfer([
        "0xF67eF8304e500a85CeC7eF03204852C456327BA5",
        100_000n * (10n ** 18n),
    ]);

    const master = await hre.viem.deployContract("PumpfaxtMaster", [
        frxUsd.address,
    ], { client });

    await master.write.setFrxUsdTarget([20_000n]);

    const feeControllerAddress = await master.read.feeController();
    const feeController = await hre.viem.getContractAt(
        "PumpfaxtFeeController",
        feeControllerAddress,
        { client },
    );

    await feeController.write.setPumpfaxtTokenBuySellFee_FRACTION([1000n]); // 0.1% fee
    await feeController.write.setPumpfaxtTokenLaunchFee_FLAT([5n]); // $5 fee

    const relayManagerAddress = await master.read.relayManager();
    const relayManager = await hre.viem.getContractAt(
        "RelayManager",
        relayManagerAddress,
        { client },
    );

    await setDefinition("PumpfaxtMaster", {
        abi: master.abi,
        address: master.address,
    });

    await setDefinition("PumpfaxtFeeController", {
        abi: feeController.abi,
        address: feeController.address,
    });

    await setDefinition("RelayManager", {
        abi: relayManager.abi,
        address: relayManager.address,
    });

    await setDefinition("frxUsd", { abi: frxUsd.abi, address: frxUsd.address });

    const token = await hre.viem.getContractAt("PumpfaxtToken", zeroAddress);
    await setDefinition("PumpfaxtToken", {
        abi: token.abi,
    });

    console.log("Deployed successfully and generated Definitions");
}

main();
