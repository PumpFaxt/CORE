import { fraxtalTestnet } from "viem/chains";
import type { PrivyClientConfig } from "privy";

export const supportedChains = [fraxtalTestnet];

export const privyAppId = "cm31r4s7n04ed120svzg37zc3";

export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "dark",
    accentColor: "#676FFF",
    logo: "/logo.svg",
  },
  supportedChains: supportedChains,
  loginMethods: [
    "email",
    "wallet",
    "google",
    // "telegram",
    "discord",
    "twitter",
    "farcaster",
  ],
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
};
