import moment from "moment";
import Icon from "../../../shared/components/Icon";
import api from "../../../shared/hooks/api";
import { truncateEvmAddress } from "../../../shared/utils/utils";

interface IProps {
  coin: NonNullable<ReturnType<typeof api.useTokens>["data"]>[number];
}

export default function (props: IProps) {
  const { coin } = props;
  const {data: creator} = api.useUserById(coin.creator);

  return (
    <div className="bg-card rounded-md overflow-hidden flex">
      <img
        src={coin.imageUrl || "/images/default-token.png"}
        className="object-contain w-1/4"
        alt={coin.name}
      />

      <div className="flex-1 max-w-3/4 p-2 flex flex-col">
        <div className="flex gap-x-2 text-lg text-foreground/80 whitespace-nowrap">
          <h4 className="truncate">{coin.name}</h4>
          <h5 className="font-bold">{`( ${coin.symbol} )`}</h5>
        </div>

        <div className="flex gap-x-1 py-1">
          <div className="flex border bg-background text-xxs gap-x-1 py-1 px-2 rounded-full items-center text-green-400">
            <span>Mkt. Cap : $41.5k</span>
          </div>

          <div className="flex border bg-background text-xxs gap-x-1 py-1 px-2 rounded-full items-center">
            <Icon name="user" strokeWidth={2} />
            <span>996 holders</span>
          </div>
        </div>

        <p className="text-xxs pb-1 text-primary flex items-center gap-x-1 whitespace-nowrap">
          <span>Launched by</span>
          <img
            className="size-[1em]"
            src="https://pngimg.com/d/wojak_PNG109613.png"
          />
          <span className="text-rainbow font-semibold">
            {creator && truncateEvmAddress(creator.address)}
          </span>
          <span>{moment(coin.createdAt).fromNow()}</span>
        </p>

        <p className="line-clamp-3 text-xs text-foreground/50 text-start">
          {coin.description}
        </p>
      </div>
    </div>
  );
}
