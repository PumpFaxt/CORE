import { createDomSignal } from "../../shared/lib/preact.ts";

type LoginState =
  | "uninitiated"
  | "initiatedEmailLogin"
  | "initiatedSocialLogin"
  | "initiatedWalletConnect";

const loginState = createDomSignal<LoginState>("uninitiated");

export { loginState };
