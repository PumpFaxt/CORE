import DrawerButton from "../../../shared/components/DrawerButton";
import api from "../../../shared/hooks/api";
import CoinCard from "./CoinCard";
import CoinDrawer from "./CoinDrawer";

export default function () {
  const coins = api.useTokens();

  return (
    <div className="flex flex-col gap-y-4 p-4">
      {coins.data?.map((coin, key) => (
        <DrawerButton element={<CoinDrawer coin={coin} />} key={key}>
          <CoinCard coin={coin} />
        </DrawerButton>
      ))}
    </div>
  );
}
