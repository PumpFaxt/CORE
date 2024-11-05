import { signal } from "@preact/signals";

type LoginState =
  | "uninitiated"
  | "initiatedEmailLogin"
  | "initiatedSocialLogin"
  | "initiatedWalletConnect";

const loginState = signal<LoginState>("uninitiated");

export { loginState };
