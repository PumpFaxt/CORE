import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import { formatAddress } from "../../shared/lib/utils.ts";

export default function TokenCard() {
  return (
    <div className="flex flex-col gap-y-2 border border-border p-2 rounded-sm">
      <div className="flex gap-x-2 items-start pb-2 border-b border-border">
        <img
          src={tokenData.imageUrl}
          alt={tokenData.name}
          className="w-1/4 object-cover aspect-square"
        />
        <div className="flex flex-col">
          <div className="flex text-sm">
            <h1>{tokenData.name}</h1>
            <FlexSeparator size="sm" />
            <p className="bg-gradient-to-br from-purple-200 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
              {tokenData.ticker}
            </p>
          </div>
          <FlexSeparator size="xs" />
          <p className="text-xs text-foreground/50">
            {tokenData.description?.length > 100
              ? `${tokenData.description.slice(0, 100)}...`
              : tokenData.description}
          </p>
        </div>
      </div>
      <div className="text-sm flex">
        <p>$450k</p>
        <FlexSeparator size="full" />
        <p className="flex items-center gap-x-1">
          <Icon name="Clock" className="size-3" />
          5h
        </p>

        <FlexSeparator size="sm" />
        <p className="flex items-center gap-x-1">
          <Icon name="ArrowLeftRight" className="size-3" />
          2,323
        </p>
      </div>
    </div>
  );
}

const tokenData = {
  name: "KhareedLoYarr",
  createdBy: "0x9B28C43d4526202c316b9ab0ECCB757C4D9c5155",
  ticker: "KLYRR",
  marketCap: "2.2M",
  price: "0.2",
  description:
    "Find & Download Free Graphic Resources for Random Nft Vectors, Stock Photos & PSD files.  Free for commercial use  High Quality Images. Find & Download the most popular Random Nft Photos on Freepik  Free for commercial use  High Quality Images.",
  imageUrl:
    "https://i.ytimg.com/vi/LW1i-axSoYE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6NX3F_tN3cSQg084sPFcPOFS1ew",
};
