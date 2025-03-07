import { usePrivy } from "@privy-io/react-auth";
import LatestCoins from "./components/LatestCoins";

export default function () {
  const privy = usePrivy();

  return (
    <div>
      <LatestCoins/>
    </div>
  );
}
