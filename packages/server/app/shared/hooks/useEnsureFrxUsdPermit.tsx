import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createPublicClient, custom } from "viem";
import { contractDefinitions, splitSignature } from "~shared";
import { UINT256_MAX } from "../config/constants";
import { primaryChain } from "../config/chain";
import { useEffect } from "react";
import api from "./api";

export default function () {
  const tokenAddress = contractDefinitions.frxUsd.address;
  const spender = contractDefinitions.PumpfaxtMaster.address;

  const privy = usePrivy();
  const { wallets } = useWallets();
  const user = wallets.find((wallet) => wallet.walletClientType === "privy");

  const {
    mutate: permitFrxUsd,
    mutateAsync: permitFrxUsdAsync,
    ...result
  } = api.useFrxUsdPermit();

  async function generateSignature() {
    if (!user?.address) return;

    const localStorageKey = `pumpfaxt-preset-frxusd-permit-${user.address}@${spender}#${tokenAddress}`;

    const preset = localStorage.getItem(localStorageKey);
    // if (preset === "true") return;

    const provider = await user.getEthereumProvider();
    const owner = user.address as "0x";
    const publicClient = createPublicClient({
      chain: primaryChain,
      transport: custom(provider),
    });

    const deadline = Math.floor(Date.now() / 1000) + 10 * 60;
    const value = 1_000_000_000_000 * Math.pow(10, 18);

    const nonce = await publicClient.readContract({
      abi: contractDefinitions.frxUsd.abi,
      address: tokenAddress,
      functionName: "nonces",
      args: [owner],
    });
    const contractDomain = await publicClient.readContract({
      abi: contractDefinitions.frxUsd.abi,
      address: tokenAddress,
      functionName: "eip712Domain",
    });

    const {
      1: name,
      2: version,
      3: chainId,
      4: verifyingContract,
    } = contractDomain;
    const domain = {
      name,
      version,
      chainId: Number(chainId),
      verifyingContract,
    };

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
      owner,
      spender,
      value,
      nonce,
      deadline,
    };

    const { signature } = await privy.signTypedData(
      {
        domain,
        types,
        primaryType: "Permit",
        message,
      },
      { uiOptions: { showWalletUIs: false } }
    );
    const { v, r, s } = splitSignature(signature as "0x");

    const req = [owner, spender, value, deadline, v, r, s] as const;

    permitFrxUsd(JSON.stringify(req), {
      onSuccess: () => {
        localStorage.setItem(localStorageKey, "true");
      },
    });
  }

  useEffect(() => {
    generateSignature();
  }, [user?.address]);

  return result;
}
