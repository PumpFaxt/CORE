import Chart from "../../../shared/components/Chart";
import Icon from "../../../shared/components/Icon";
import api from "../../../shared/hooks/api";

interface IProps {
  coin: NonNullable<ReturnType<typeof api.useTokens>["data"]>[number];
}

export default function (props: IProps) {
  const { coin } = props;
  const { data: creator } = api.useUserById(coin.creator);

  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex items-end font-semibold gap-x-3">
        <img src={coin.imageUrl} className="size-10 object-contain" />
        <div className="flex-1">
          <h1 className="truncate flex gap-x-2 text-xl">
            {coin.name}
            <span className="text-foreground/50">{coin.symbol}</span>
          </h1>
          <div className="flex items-center gap-x-1 text-green-500 text-xs font-normal">
            <Icon name="trending-up" />
            <p>56.7%</p>
            <span className="text-foreground/30">Past 24 hrs</span>
          </div>
        </div>

        <Icon name="twitter" />
        <Icon name="globe" />
      </div>

      <Chart />

      <div className="">
        <h3 className="font-semibold text-lg my-3">Your Balance</h3>
        <div className="flex items-center gap-x-2 font-semibold">
          <img
            src={coin.imageUrl}
            className="size-8 object-contain rounded-full border"
          />
          <p className="text-foreground/50">12,000,231</p>
          <p className="text-secondary ml-2">$21.00</p>
        </div>
      </div>

      <figure className="h-[1px] bg-border w-full" />

      <div className="">
        <h4 className="font-semibold text-lg">About</h4>
        <p className="text-xs text-foreground/50">{coin.description}</p>

        <div className="flex justify-between">
            <p></p>
        </div>
      </div>

      <div className="flex sticky bottom-0 w-full gap-x-2 font-semibold">
        <button className="bg-green-600 p-2 rounded-lg flex-1 flex items-center justify-center gap-x-1">
          <Icon strokeWidth={2} name="coins" /> Buy
        </button>
        <button className="bg-red-600 p-2 rounded-lg flex-1 flex items-center justify-center gap-x-1">
          <Icon strokeWidth={2} name="arrow-down-circle" /> Sell
        </button>
      </div>
    </div>
  );
}
