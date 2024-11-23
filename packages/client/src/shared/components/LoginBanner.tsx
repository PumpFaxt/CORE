import FlexSeparator from "./FlexSeparator.tsx";
import Link from "./Link.tsx";

export default function LoginBanner() {
  return (
    <div className="flex flex-col -translate-y-4 border-b border-border pb-4">
      <div className="flex items-end">
        <h1 className="text-xl font-semibold">
          Back to the Fun Side <br /> of Crypto
        </h1>
        <FlexSeparator size="full" />
        <img
          src="https://media.tenor.com/8tgG_KyJqqwAAAAj/happy-happy-happy-happy.gif"
          className="w-1/3 translate-y-8"
        />
      </div>

      <FlexSeparator size="md" />

      <div className="flex">
        <Link to="/login" className="w-1/2 py-1 bg-foreground/20 rounded-xl">
          Log In
        </Link>
        <FlexSeparator size="md" />
        <Link to="/login" className="w-1/2 py-1 bg-primary rounded-xl">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
