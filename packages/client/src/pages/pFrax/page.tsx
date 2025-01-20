import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Header from "../../shared/components/Header.tsx";
import WalletInfo from "./WalletInfo.tsx";
import { usePrivy } from "privy";
import LoginBanner from "../../shared/components/LoginBanner.tsx";

export default function () {
  const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <Header />
      {!authenticated && <LoginBanner />}
      <FlexSeparator size="md" />
      <WalletInfo />
    </div>
  );
}
