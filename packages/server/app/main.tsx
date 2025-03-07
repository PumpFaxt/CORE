import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.tsx";

import "./tailwind.css";

import { PrivyProvider } from "@privy-io/react-auth";
import { privyConfig } from "./shared/config/privy.ts";
import { useServerConfig } from "./shared/stores/global.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Router />
      </Providers>
    </QueryClientProvider>
  </StrictMode>
);

function Providers(props: { children: React.ReactNode }) {
  const serverConfig = useServerConfig();

  if (serverConfig.loading) return <></>;

  return (
    <PrivyProvider appId={serverConfig.privyAppId} config={privyConfig}>
      {props.children}
    </PrivyProvider>
  );
}
