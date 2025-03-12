import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import env from "../../../env";
import * as chains from "viem/chains";

const network = env.EVM_NETWORK as keyof typeof chains;
const chain = chains[network];
const rpc = chain.rpcUrls.default.http[0];

const walletClient = createWalletClient({
    account: privateKeyToAccount(env.SERVER_PRIVATE_KEY as "0x"),
    transport: http(rpc),
});

const publicClient = createPublicClient({
    transport: http(rpc),
});

const evmClient = { wallet: walletClient, public: publicClient };

export default evmClient;
