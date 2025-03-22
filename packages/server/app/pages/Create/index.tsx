import { usePrivy } from "@privy-io/react-auth";
import LoginPrompt from "../../shared/components/LoginPrompt";
import CreateForm from "./components/CreateForm";

export default function () {
  const privy = usePrivy();

  if (!privy.authenticated)
    return (
      <div>
        <LoginPrompt
          img="/images/new-token-prompt.png"
          title="Launch Token"
          description="Sign up to launch your own token on pumpfaxt and begin your very own moon mission."
        />
      </div>
    );

  return <div>
    <CreateForm />
  </div>;
}
