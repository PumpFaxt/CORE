import { PrivyProvider } from "@privy-io/react-auth";
import { privyAppId, privyConfig } from "../config.ts";

export default function Web3Provider(
  { children }: { children: preact.VNode },
) {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={privyConfig}
    >
      {children}
    </PrivyProvider>
  );
}
