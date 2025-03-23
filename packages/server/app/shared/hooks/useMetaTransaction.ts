import { usePrivy } from "@privy-io/react-auth";
import { encodePacked, isAddress, keccak256 } from "viem";
import api from "./api";
import { useEffect, useState } from "react";

export function useMetaTransaction(
    parameters: {
        functionName: string;
        args: Readonly<Parameters<typeof encodePacked>>;
    },
) {
    const { args, functionName } = parameters;

    const privy = usePrivy();
    const { data: nonce } = api.useRelayNonce();

    const [result, setResult] = useState<string>();

    async function generateRequest() {
        const address = privy.user?.wallet?.address;
        if (!nonce){
            throw new Error("Unable to get nonce");
        }
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
                BigInt(nonce),
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
        setResult(JSON.stringify(req));
    }

    useEffect(() => {
        if (nonce?.length) {
            generateRequest();
        }
    }, [nonce]);

    return result;
}
