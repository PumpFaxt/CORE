import FlexSeparator from "../../../shared/components/FlexSeparator.tsx";
import Header from "./Header.tsx";
import SendInput from "./SendInput.tsx";

export default function () {
  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <Header />
      <FlexSeparator size="md" />
      <SendInput />
    </div>
  );
}
