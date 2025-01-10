import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Icon from "../../shared/components/Icon.tsx";
import FormatAddress from "../../shared/components/FormatAddress.tsx";
import ClipboardWrapper from "../../shared/components/ClipboardWrapper.tsx";

export default function TokenInfo() {
  return (
    <div className="flex flex-col gap-y-2 border border-border p-2 rounded-sm hover:cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={tokenData.imageUrl}
          alt={tokenData.name}
          className="object-cover absolute top-0 left-0 self-center aspect-video blur-3xl scale-125"
        />
        <img
          src={tokenData.imageUrl}
          alt={tokenData.name}
          className="object-contain aspect-video relative"
        />
      </div>
      <div className="flex gap-x-2 items-start ">
        <div className="flex flex-col">
          <div className="flex text-sm flex-col">
            <div className="flex w-full">
              <h1>{tokenData.name}</h1>

              <FlexSeparator size="full" />
              <div className="flex text-xs items-center">
                <p className="whitespace-nowrap mr-1 text-foreground/50">
                  Created By:
                </p>
                <ClipboardWrapper textToBeCopied="0x9B28C43d4526202c316b9ab0ECCB757C4D9c5155">
                  <div className="flex items-center">
                    <FormatAddress address="0x9B28C43d4526202c316b9ab0ECCB757C4D9c5155" />
                    <FlexSeparator size="sm" />
                    <Icon name="Copy" className="size-5" />
                  </div>
                </ClipboardWrapper>
              </div>
            </div>

            <div className="flex w-full items-center">
              <p className="bg-gradient-to-r text-xl w-max from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent font-bold">
                {tokenData.ticker}
              </p>
            </div>
          </div>
          <FlexSeparator size="xs" />
          <p className="text-xs text-foreground/50">
            {tokenData.description}
          </p>
        </div>
      </div>
      <div className="text-xs font-semibold flex flex-col bg-foreground/5 py-2 px-3 rounded-xs">
        <div className="flex w-full">
          <p>
            Price
          </p>
          <FlexSeparator size="full" />
          <p>
            <span className="text-green-400 font-semibold font-mono">
              +2.57%
            </span>{" "}
            {tokenData.price} PFRAX
          </p>
        </div>
        <FlexSeparator size="md" />
        <div className="flex w-full">
          <p>
            Market Cap
          </p>
          <FlexSeparator size="full" />
          <p>
            ${tokenData.marketCap}
          </p>
        </div>
        <FlexSeparator size="md" />
        <div className="flex w-full">
          <p>
            24H Volume
          </p>
          <FlexSeparator size="full" />
          <p>
            240k PFRAX
          </p>
        </div>
        <FlexSeparator size="md" />
        <div className="flex w-full">
          <p>
            Token Created
          </p>
          <FlexSeparator size="full" />
          <p>
            20H 32M Ago
          </p>
        </div>
        <FlexSeparator size="md" />
        <div className="flex w-full">
          <p>
            Socials
          </p>
          <FlexSeparator size="full" />
          <div className="flex gap-x-1">
            <img
              src="https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-icon-with-png-and-vector-format-for-unlimited-22.png"
              className="w-5 rounded-md"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/640px-X_logo.jpg"
              className="w-5 rounded-md"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"
              className="w-5 rounded-md"
            />
          </div>
        </div>
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
    "https://i.pinimg.com/736x/26/db/8e/26db8e1bc9a0eb238e69ae7d01a24fee.jpg",
};
