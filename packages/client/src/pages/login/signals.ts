import { signal } from "@preact/signals";

type LoginState =
  | "uninitiated"
  | "initiatedEmailLogin"
  | "initiatedSocialLogin";

const loginState = signal<LoginState>("uninitiated");

export { loginState };
