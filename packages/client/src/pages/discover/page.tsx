// import { usePrivy } from "privy";

import { useEffect } from "preact/hooks";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Header from "../../shared/components/Header.tsx";
import LoginBanner from "../../shared/components/LoginBanner.tsx";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";
import Navigation from "./Navigation.tsx";
import Tokens from "./Tokens.tsx";
import { usePrivy, useWallets } from "privy";

export default function () {
  const { authenticated } = usePrivy();
  const w = useWallets();

  useEffect(() => {
    (async () => {
      const provider = await w.wallets[0].getEthereumProvider();
      console.log("hello", provider);
    })();
  }, [w]);

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <RiskWarningBanner />

      <FlexSeparator size="sm" />

      <Header />

      {!authenticated && <LoginBanner />}

      <Navigation />

      <FlexSeparator size="lg" />
      <Tokens />
    </div>
  );
}
