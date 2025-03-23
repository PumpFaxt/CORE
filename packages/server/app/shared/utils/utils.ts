import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PrivyInterface } from "@privy-io/react-auth";
import { encodePacked, isAddress, keccak256 } from "viem";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function generateMetaTxRequest(
    privy: PrivyInterface,
    nonce: bigint,
    parameters: {
        functionName: string;
        args: Readonly<Parameters<typeof encodePacked>>;
    },
) {
    const { args, functionName } = parameters;

    const address = privy.user?.wallet?.address;

    if (!address || !isAddress(address)) {
        throw new Error("Invalid evm wallet address");
    }

    const msg = keccak256(
        encodePacked(args[0], args[1]),
    );

    const digest = keccak256(
        encodePacked(["address", "string", "bytes32", "uint"], [
            address,
            functionName.toString(),
            msg,
            nonce,
        ]),
    );
    const { signature } = await privy.signMessage({ message: digest }, {
        uiOptions: { showWalletUIs: false },
    });

    const req = [
        address,
        ...(args[1]),
        signature,
    ];

    return JSON.stringify(req);
}

export function truncateEvmAddress(address: string, length: number = 4): string {
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        throw new Error("Invalid Ethereum address");
    }
    return `${address.slice(0, 6)}...${address.slice(-length)}`;
}
