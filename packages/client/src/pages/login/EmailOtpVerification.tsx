import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import Loading from "../../shared/components/Loading.tsx";
import OtpInput from "../../shared/components/OtpInput.tsx";
import { useLoginWithEmail } from "@privy-io/react-auth";

export default function EmailOtpVerification() {
  const { loginWithCode, state } = useLoginWithEmail();

  return (
    <section className={"flex flex-col"}>
      {state.status === "awaiting-code-input" && (
        <section
          className={"motion-preset-fade-lg motion-duration-500 flex flex-col"}
        >
          <OtpInput
            length={4}
            onComplete={(otp) => {
              loginWithCode({ code: otp });
            }}
          />

          <FlexSeparator size="lg" />

          <button className={"btn primary"}>Verify</button>
        </section>
      )}

      {(state.status === "sending-code" ||
        state.status === "submitting-code") && (
        <Loading className="w-1/2 self-center" />
      )}

      {state.status === "error" && (
        <>
          <p className={"text-error"}>
            Something went wrong while trying to verify your OTP. Please try
            again.
          </p>

          <FlexSeparator />

          <button className={"btn base invert"}>Go Back</button>
        </>
      )}
    </section>
  );
}
