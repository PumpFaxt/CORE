export default function OAuthLoginOptions() {
  return (
    <>
      <p className={"text-center mb-4 font-medium text-foreground/50"}>
        Continue with
      </p>

      <div className={"flex justify-evenly"}>
        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-white"}
        >
          <img src="/icons/google.webp" alt="Google" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-2 bg-white"}
        >
          <img src="/icons/x.webp" alt="X / Twitter" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-blue-500"}
        >
          <img src="/icons/discord.webp" alt="Discord" />
        </button>

        <button
          className={"btn-icon rounded-full overflow-hidden p-1 bg-violet-500"}
        >
          <img src="/icons/farcaster.webp" alt="Farcaster" />
        </button>
      </div>
    </>
  );
}
