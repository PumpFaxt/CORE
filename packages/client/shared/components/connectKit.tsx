"use client";

import type React from "react-dom";
import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import { fraxtalTestnet } from "@particle-network/connectkit/chains";
import { aa } from "@particle-network/connectkit/aa";
import {
  evmWalletConnectors,
  passkeySmartWallet,
} from "@particle-network/connectkit/evm";
import { EntryPosition, wallet } from "@particle-network/connectkit/wallet";

const projectId = "2eba3763-a718-436a-baec-05b0b7a9a2c4";
const clientKey = "cKkoHoGHMVniB3HrlKUpZ4BkPKecoDiQtAFvBLMk";
const appId = "b80f1cc8-f449-4317-9c4f-e148cad44d87";
const walletConnectProjectId = "01a7d75070b1b9228aa0491cdaf9509e";

if (!projectId || !clientKey || !appId) {
  throw new Error("Please configure the Particle project in .env first!");
}

const config = createConfig({
  projectId,
  clientKey,
  appId,
  appearance: {
    recommendedWallets: [
      { walletId: "walletConnect", label: "Popular" },
      { walletId: "metaMask", label: "Recommended" },
    ],
    theme: { "--pcm-accent-color": "#2eae22" },
    language: "en-US",
  },
  walletConnectors: [
    authWalletConnectors({
      authTypes: [
        "google",
        "apple",
        "twitter",
        "discord",
        "microsoft",
        "phone",
        "email",
      ],
    }),

    evmWalletConnectors({
      metadata: {
        name: "Connectkit Demo",
        icon: typeof window !== "undefined"
          ? `${globalThis.window.location.origin}/favicon.ico`
          : "",
        description: "Particle Connectkit Next.js Scaffold.",
        url: typeof window !== "undefined"
          ? globalThis.window.location.origin
          : "",
      },
      connectorFns: [passkeySmartWallet()],
      walletConnectProjectId: walletConnectProjectId,
    }),
  ],
  plugins: [
    // embedded wallet start
    wallet({
      visible: true,
      entryPosition: EntryPosition.BR,
    }),
    // embedded wallet end

    // aa config start
    aa({
      name: "SIMPLE",
      version: "2.0.0",
    }),
    // aa config end
  ],
  chains: [fraxtalTestnet],
});

export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
