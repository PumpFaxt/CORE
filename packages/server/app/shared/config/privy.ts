import { PrivyClientConfig } from "@privy-io/react-auth";

export const privyConfig: PrivyClientConfig = {
    appearance: {
        logo: "/branding.png",
    },
    // Create embedded wallets for users who don't have a wallet
    embeddedWallets: {
        createOnLogin: "users-without-wallets",
    },
};
