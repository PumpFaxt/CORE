import Icon from "../../../shared/components/Icon";
import api from "../../../shared/hooks/api";

export default function () {
  const coins = api.useDummyCoins();

  return (
    <div className="flex flex-col gap-y-4 p-4">
      {coins.data?.map((coin, key) => (
        <div key={key} className="bg-card rounded-md overflow-hidden flex">
          <img
            src={coin.imageUrl}
            style={{ aspectRatio: getRandomAspectRatio() }}
            className="object-cover w-1/4"
            alt={coin.name}
          />

          <div className="flex-1 max-w-3/4 p-2 flex flex-col">
            <div className="flex gap-x-2 text-lg text-foreground/80 whitespace-nowrap">
              <h4 className="truncate">{coin.name}</h4>
              <h5 className="font-bold">{`( ${coin.ticker} )`}</h5>
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

            <p className="text-xxs pb-2 text-primary">Launched by <span className="text-rainbow font-semibold bg-blend-lighten">@marsian83</span> 37m ago</p>

            <p className="line-clamp-3 text-xs text-foreground/50">
              {coin.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function getRandomAspectRatio(): number {
  return Math.random() * (16 / 9 - 9 / 16) + 9 / 16;
}
