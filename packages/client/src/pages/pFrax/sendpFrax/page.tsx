import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";
import Header from "./Header.tsx";
import RecentTransactions from "./RecentTransactions.tsx";
import SendInput from "./SendInput.tsx";

export default function () {
  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <Header />
      <FlexSeparator size="md" />
      <SendInput />
      <FlexSeparator size="md" />
      <p className="text-xs text-foreground/60">
        Ensure the receiving wallet is correct to avoid losing of funds.
      </p>
      <FlexSeparator size="md" />
      <RecentTransactions />
    </div>
  );
}
