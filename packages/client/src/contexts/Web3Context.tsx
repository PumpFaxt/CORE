import { PrivyProvider } from "@privy-io/react-auth";
import { fraxtalTestnet } from "viem/chains";

export default function Web3Provider(
    { children }: { children: preact.VNode },
) {
    return (
        <PrivyProvider
            appId="cm31r4s7n04ed120svzg37zc3"
            config={{
                appearance: {
                    theme: "dark",
                    accentColor: "#676FFF",
                    logo: "https://your-logo-url",
                },
                supportedChains: [fraxtalTestnet],
                intl: { defaultCountry: "IN" },
                loginMethods: [
                    "email",
                    "wallet",
                    "google",
                    "apple",
                    // "telegram",
                    "discord",
                    "twitter",
                    "farcaster",
                ],
                embeddedWallets: {
                    createOnLogin: "users-without-wallets",
                },
            }}
        >
            {children}
        </PrivyProvider>
    );
}
