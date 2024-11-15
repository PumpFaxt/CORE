import { Form } from "../../shared/components/radix.ts";
import { useLoginWithEmail } from "privy";
import type { FormSubmitEvent } from "../../shared/types/utils.d.ts";
import { parseFormEventData } from "../../shared/lib/utils.ts";
import { loginState } from "./signals.ts";

export default function LoginWithEmail() {
  const { sendCode } = useLoginWithEmail();

  return (
    <Form.Root
      onSubmit={(
        event: FormSubmitEvent,
      ) => {
        const data = parseFormEventData(event);

        if (!data.email) throw new Error("Invalid email");

        sendCode({ email: data.email.toString() });

        loginState.value = "initiatedEmailLogin";

        event.preventDefault();
      }}
    >
      <Form.Field name="email">
        <div className={"flex justify-between"}>
          <Form.Label>
            Email Login
          </Form.Label>

          <Form.Message
            className="text-error"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>

          <Form.Message
            className="text-error"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>

        <Form.Control asChild>
          <input
            type="email"
            className={"mt-2"}
            placeholder="Full Email Address"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button className={"btn primary w-full mt-4"}>
          Next
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
