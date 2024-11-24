// import { usePrivy } from "privy";

import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Header from "../../shared/components/Header.tsx";
import LoginBanner from "../../shared/components/LoginBanner.tsx";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";

export default function () {
  // const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <RiskWarningBanner />

      <FlexSeparator size="sm" />

      <Header />

      <LoginBanner />
    </div>
  );
}
