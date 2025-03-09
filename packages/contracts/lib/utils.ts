import hre from "hardhat";

export async function tx(txnPromise: Promise<`0x${string}`>) {
    const publicClient = await hre.viem.getPublicClient();
    const txn = await txnPromise;
    await publicClient.waitForTransactionReceipt({ hash: txn });
}
