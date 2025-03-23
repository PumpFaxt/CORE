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

      <div className="">
        <img
          src="https://png.pngtree.com/png-vector/20221228/ourmid/pngtree-trading-candlestick-pattern-in-red-and-green-colors-png-image_6536057.png"
          alt="chart"
          className="w-full saturate-150 aspect-[10/7]"
        />
        <div className="flex rounded-full border justify-between p-[2px] text-sm">
          <button className="flex-1 rounded-full bg-foreground/10">1H</button>
          <button className="flex-1">4H</button>
          <button className="flex-1">1D</button>
          <button className="flex-1">1W</button>
          <button className="flex-1">1M</button>
          <button className="flex-1">3M</button>
          <button className="flex-1">MAX</button>
        </div>
      </div>

      <div className="">
        <h3 className="font-semibold text-lg my-2">Your Balance</h3>
        <div className="flex items-center gap-x-2 font-semibold">
          <img
            src={coin.imageUrl}
            className="size-8 object-contain rounded-full border"
          />
          <p>12,000,231</p>
          <p className="text-green-500 ml-2">$21.00</p>
        </div>
      </div>
    </div>
  );
}
