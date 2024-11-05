import LoginWithEmail from "./LoginWithEmail.tsx";
import Divider from "../../shared/components/Divider.tsx";
import OAuthLoginOptions from "./OAuthLoginOptions.tsx";
import { useConnectWallet } from "@privy-io/react-auth";
import { loginState } from "./signals.ts";

export default function LoginMethodSelection() {
  const { connectWallet } = useConnectWallet();
  return (
    <>
      <LoginWithEmail />

      <Divider className="my-8">
        <span className={"text-xs px-3 text-foreground/50"}>OR</span>
      </Divider>

      <OAuthLoginOptions />

      <Divider className="my-8">
        <span className={"text-xs px-3 text-foreground/50"}>OR</span>
      </Divider>

      <button
        className={"btn base invert w-full"}
        onClick={() => {
          connectWallet();
          loginState.value = "initiatedWalletConnect";
        }}
      >
        Continue with a Web3 Wallet
      </button>
    </>
  );
}
