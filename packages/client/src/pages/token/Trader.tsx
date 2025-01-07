import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "../../shared/components/Icon.tsx";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";

type TradingPairEntry = {
  name: string;
  image: string;
  balance: number;
};

export default function Trader() {
  const token = {
    symbol: "KKRHY",
    image:
      "https://i.ytimg.com/vi/LW1i-axSoYE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6NX3F_tN3cSQg084sPFcPOFS1ew",
  };

  const [loading, setLoading] = useState(false);
  const [tradeState, setTradeState] = useState<"BUY" | "SELL">("BUY");
  const [amount, setAmount] = useState({ buy: 0, sell: 0 });
  const [slippage, setSlippage] = useState(1);

  const tradingPair = [
    {
      name: "FRAX",
      image: "https://cryptologos.cc/logos/frax-frax-logo.png",
      balance: 1000,
    },
    { name: token.symbol, image: token.image, balance: 500 },
  ];

  const buying = tradeState === "BUY" ? 1 : 0;
  const selling = tradeState === "SELL" ? 1 : 0;

  function setSellAmount(amt: number) {
    const sell = amt;
    const buy = tradeState === "BUY" ? amt * 0.8 : amt * 1.2;
    setAmount({ sell, buy });
  }

  const progressPercent = "60.00";

  return (
    <div
      className={twMerge(
        "w-full flex flex-col gap-y-2 h-max",
        loading && "animate-pulse",
      )}
    >
      <div className="flex flex-col relative gap-y-2">
        <div className="self-start text-yellow-400 text-sm animate-pulse flex items-center">
          <Icon name="CircleAlert" className="size-5" />
          <FlexSeparator size="sm" />
          <p className="whitespace-nowrap">
            You are {tradeState.toLowerCase()}ing {token.symbol} for {"FRAX"}
          </p>
        </div>

        <div className="flex gap-x-1 w-full">
          <input
            placeholder={`current slippage ${slippage}%`}
            className="text-xs px-2 py-1 bg-transparent border border-front/20 rounded-sm focus-within:outline-none w-full"
            name="slippage"
            type="number"
            min="1"
            max="100"
          />
          <button className="text-xs text-background font-semibold self-end py-1 px-2 rounded-xs bg-foreground/90 whitespace-nowrap">
            Set max slippage
          </button>
        </div>

        <div className="border border-front/20 p-3 rounded-lg min-h-[15vh]">
          <h1>Sell</h1>
          <TradingPairMember
            token={tradingPair[selling]}
            max={tradingPair[selling].balance}
            setSellAmount={setSellAmount}
            label="Max"
          />
        </div>

        <button
          className="p-1 scale-150 border w-max border-front/20 text-xs bg-background rounded-md rotate-90 absolute left-1/2 -translate-x-1/2 top-1/2"
          onClick={() => {
            setTradeState((p: string) => (p === "BUY" ? "SELL" : "BUY"));
            setSellAmount(0);
          }}
        >
          <Icon name="ArrowRight" className="size-3" />
        </button>

        <div className="border border-front/20 p-3 rounded-lg min-h-[15vh]">
          <h1>Buy</h1>
          <TradingPairMember
            token={tradingPair[buying]}
            buyAmount={amount.buy}
            label="Balance"
          />
        </div>

        <button
          className={twMerge(
            "w-full rounded-md py-2 text-black font-semibold disabled:opacity-50",
            tradeState === "BUY" ? "bg-green-400" : "bg-red-400",
          )}
          disabled={loading}
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1000); // Simulating a delay
          }}
        >
          {tradeState}
        </button>
      </div>

      <div className="flex flex-col w-full self-start mt-3 border-t border-front/20 pt-3">
        <p className="">XYZ Listing Progress : {progressPercent}%</p>
        <div className="h-[1vh] w-full bg-primary/20 mt-3 rounded-xl flex items-center relative">
          <div
            className={`w-[60%] bg-primary h-full rounded-xl`}
          />
          <img
            src={token.image}
            className="w-[3vw] rounded-full -translate-x-3 aspect-square object-cover scale-125"
          />
        </div>
        <p className="mt-4 text-sm text-front/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          necessitatibus quaerat cupiditate itaque quod sed deserunt hic in est
          corporis?
        </p>
      </div>
    </div>
  );
}

interface TradingPairMemberProps {
  token: TradingPairEntry;
  setSellAmount?: (amt: number) => void;
  buyAmount?: number;
  max?: number;
  label: string;
}

function TradingPairMember(props: TradingPairMemberProps) {
  const { token, setSellAmount, label } = props;

  return (
    <>
      <div className="flex gap-x-2 justify-between w-full">
        <input
          className="bg-transparent text-xl py-2 focus-within:outline-none"
          placeholder="0"
          disabled={!setSellAmount}
          value={props.buyAmount || ""}
          type="number"
        />
        <div className="flex gap-x-2 items-center bg-front/10 rounded-2xl h-max py-1 px-2 justify-end">
          <h1>{token.name}</h1>
          <img
            src={token.image}
            alt={token.name}
            className="w-6 aspect-square object-cover rounded-full"
          />
        </div>
      </div>
      <p className="text-sm flex justify-end pt-1 text-front/70">
        {label}: {token.balance} {token.name}
      </p>
    </>
  );
}
