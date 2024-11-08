import { usePrivy } from "privy";

export default function () {
  const { authenticated } = usePrivy();

  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      {}
    </div>
  );
}
