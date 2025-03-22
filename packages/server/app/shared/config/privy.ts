import { PrivyClientConfig } from "@privy-io/react-auth";
import { primaryChain } from "./chain";

export const privyConfig: PrivyClientConfig = {
    appearance: {
        logo: "/branding.png",
        theme: "dark",
    },
    // Create embedded wallets for users who don't have a wallet
    embeddedWallets: {
        createOnLogin: "users-without-wallets",
    },
    supportedChains: [primaryChain],
    defaultChain: primaryChain,
};
