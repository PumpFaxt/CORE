import type { Address, GetContractReturnType, Hash, WalletClient } from "viem";
import type ERC20PermitAbi from "./ERC20Permit.abi";
import * as viem from "viem";

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

export function splitSignature(signature: Hash) {
    let [r, s, v] = [
        viem.slice(signature, 0, 32),
        viem.slice(signature, 32, 64),
        viem.hexToNumber(viem.slice(signature, 64, 65)),
    ];

    if (v < 27) {
        v += 27;
    }
    return { r, s, v };
}

type ERC20PermitContract = GetContractReturnType<
    typeof ERC20PermitAbi,
    WalletClient
>;
export async function permitERC20PermitRequest(
    tokenContract_: any,
    ownerClient_: any,
    spenderAddress_: Address,
    deadline_?: number,
    value_?: number,
) {
    const token = tokenContract_ as ERC20PermitContract;
    const owner = ownerClient_ as WalletClient;
    const spender = spenderAddress_;
    if (!owner.account) throw new Error("No account");

    const deadline = BigInt(
        deadline_ ?? Math.floor(Date.now() / 1000) + 10 * 60,
    );
    const value = BigInt(value_ ?? await token.read.totalSupply());

    const nonce = await token.read.nonces([
        owner.account.address,
    ]);

    const { 1: name, 2: version, 3: chainId, 4: verifyingContract } =
        await token.read.eip712Domain();
    const domain = { name, version, chainId, verifyingContract };

    const types = {
        Permit: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
            { name: "nonce", type: "uint256" },
            { name: "deadline", type: "uint256" },
        ],
    };

    const message = {
        owner: owner.account.address,
        spender,
        value,
        nonce,
        deadline,
    };

    const signature = await owner.signTypedData({
        domain,
        types,
        primaryType: "Permit",
        message,
        account: owner.account,
    });
    const { v, r, s } = splitSignature(signature);

    const req = [
        owner.account.address,
        spender,
        value,
        deadline,
        v,
        r,
        s,
    ] as const;

    return req as Mutable<
        typeof req
    >;
}

export async function metaTxRequest<
    A extends Readonly<Parameters<typeof viem.encodePacked>>,
>(
    parameters: {
        signer: viem.WalletClient<viem.Transport, viem.Chain, viem.Account>;
        functionName: string;
        args: A;
        nonce?: bigint;
    },
) {
    const { signer, args, functionName } = parameters;

    const msg = viem.keccak256(
        viem.encodePacked(args[0], args[1]),
    );

    const digest = viem.keccak256(
        viem.encodePacked(["address", "string", "bytes32", "uint"], [
            signer.account.address,
            functionName.toString(),
            msg,
            parameters.nonce || 0n,
        ]),
    );

    const signature = await signer.signMessage({
        message: { raw: viem.hexToBytes(digest) },
    });

    const req = [
        signer.account.address,
        ...(args[1] as A[1]),
        signature,
    ] as const;
    return req as Mutable<typeof req>;
}
