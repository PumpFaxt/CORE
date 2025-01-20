import ClipboardWrapper from "../../shared/components/ClipboardWrapper.tsx";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import FormatAddress from "../../shared/components/FormatAddress.tsx";
import Icon from "../../shared/components/Icon.tsx";
import Link from "../../shared/components/Link.tsx";
import { usePrivy } from "privy";

export default function WalletInfo() {
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address || "";
  console.log(walletAddress);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex text-sm items-center">
          <p className="whitespace-nowrap mr-1 ">
            Your Wallet
          </p>
          <ClipboardWrapper textToBeCopied={walletAddress}>
            <div className="flex items-center text-foreground/50 text-sm">
              <FormatAddress address={walletAddress} />
              <FlexSeparator size="sm" />
              <Icon name="Copy" className="size-5" />
            </div>
          </ClipboardWrapper>
        </div>
        <FlexSeparator size="md" />
        <div className="flex items-start">
          <p className="text-3xl font-bold tracking-wider -translate-y-1">
            ******
          </p>
          <FlexSeparator size="xs" />
          <Icon name="Eye" className="size-5" />
        </div>
      </div>
      <FlexSeparator size="full" />
      <div className="flex text-xs gap-x-2">
        <Link to="/pfrax/send" className="flex flex-col items-center gap-y-1">
          <Icon name="Upload" className="border p-3 rounded-md size-11" />
          <p>
            Send
          </p>
        </Link>
        <button className="flex flex-col items-center gap-y-1">
          <Icon name="Download" className="border p-3 rounded-md size-11" />
          <p>
            Receive
          </p>
        </button>
      </div>
    </div>
  );
}
