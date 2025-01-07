// import { usePrivy } from "privy";

import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Header from "./Header.tsx";
import TokenInfo from "./TokenInfo.tsx";
import Trader from "./Trader.tsx";

export default function () {
  // const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <Header />
      <FlexSeparator size="md" />
      <TokenInfo />
      <FlexSeparator size="md" />
      <div className="flex text-xs gap-x-4 text-foreground/50 items-center">
        <p className="whitespace-nowrap">Chart</p>
        <p className="bg-foreground/10 px-4 py-1 rounded-xl whitespace-nowrap text-foreground">
          Buy/Sell
        </p>
        <p className="whitespace-nowrap">Chat</p>
      </div>

      <FlexSeparator size="sm" />
      <Trader />
    </div>
  );
}
