import { useLoginWithOAuth } from "privy";
import { loginState } from "./signals.ts";

export default function OAuthLoginOptions() {
  const { initOAuth, loginWithOAuth } = useLoginWithOAuth();

  function handleOAuthLogin(
    provider: "google" | "twitter" | "discord",
  ) {
    initOAuth({ provider }).then(() =>
      loginWithOAuth().catch(() => {
        loginState.value = "uninitiated";
      })
    ).catch(() => {
      loginState.value = "uninitiated";
    });
    loginState.value = "initiatedSocialLogin";
  }

  return (
    <>
      <p className={"text-center mb-4 font-medium text-foreground/50"}>
        Continue with
      </p>

      <div className={"flex justify-evenly"}>
        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-white"}
          title="Login with Google"
          onClick={() => {
            handleOAuthLogin("google");
          }}
        >
          <img src="/icons/google.webp" alt="Google" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-2 bg-white"}
          title="Continue with X / Twitter"
          onClick={() => {
            handleOAuthLogin("twitter");
          }}
        >
          <img src="/icons/x.webp" alt="X (formerly Twitter)" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-blue-500"}
          title="Continue with Discord"
          onClick={() => {
            handleOAuthLogin("discord");
          }}
        >
          <img src="/icons/discord.webp" alt="Discord" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-violet-500 hover:blur-md focus:blur-md"}
          title="Login using Farcaster (Coming Soon)"
        >
          <img src="/icons/farcaster.webp" alt="Farcaster" />
        </button>
      </div>
    </>
  );
}
