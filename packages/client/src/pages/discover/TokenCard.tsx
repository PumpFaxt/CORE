import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";

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
            <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent font-bold">
              ({tokenData.ticker})
            </p>
            <FlexSeparator size="full" />
            <Icon name="Star" className="size-4" />
          </div>
          <FlexSeparator size="xs" />
          <p className="text-xs text-foreground/50">
            {tokenData.description?.length > 100
              ? `${tokenData.description.slice(0, 100)}...`
              : tokenData.description}
          </p>
          <FlexSeparator size="md" />
          <div className="flex flex-col">
            <div className="text-xs flex">
              <p className="text-foreground/50">
                Market Cap:
              </p>
              <FlexSeparator size="xs" />
              <p>$645.21k</p>
              <FlexSeparator size="xs" />
              <p className="text-foreground/50">(45.24%)</p>
            </div>
            <FlexSeparator size="sm" />
            <div className="h-2 w-1/2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 rounded-md" />
          </div>
        </div>
      </div>
      <div className="text-sm flex items-center">
        <p className="flex items-center gap-x-1">
          <Icon name="Clock" className="size-3" />
          5h
        </p>

        <FlexSeparator size="sm" />
        <p className="flex items-center gap-x-1">
          <Icon name="ArrowLeftRight" className="size-3" />
          2,323
        </p>

        <FlexSeparator size="full" />
        <Icon name="Twitter" className="size-3" />

        <FlexSeparator size="sm" />
        <Icon name="MessageSquare" className="size-3" />

        <FlexSeparator size="sm" />
        <Icon name="Globe" className="size-3" />
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
