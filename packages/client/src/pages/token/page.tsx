// import { usePrivy } from "privy";

import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Header from "./Header.tsx";

export default function () {
  // const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <Header />
      <FlexSeparator size="sm" />
    </div>
  );
}
