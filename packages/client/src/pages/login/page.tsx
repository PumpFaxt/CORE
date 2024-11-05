import Icon from "../../shared/components/Icon.tsx";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";
import LoginMethodSelection from "../login/LoginMethodSelection.tsx";
import { twMerge } from "tailwind-merge";
import { loginState } from "../login/signals.ts";

export default function () {
  return (
    <div className={"p-page flex flex-col overflow-hidden"}>
      <RiskWarningBanner />

      <FlexSeparator size="lg" />

      <section className={"flex -mx-2"}>
        <Icon name="X" weight="medium" />

        <FlexSeparator size="full" />

        <Icon name="Headphones" />
      </section>

      <FlexSeparator size="xl" />

      <h1 className={"text-2xl font-semibold text-nowrap"}>
        Welcome to Pumpfaxt
      </h1>

      <FlexSeparator size="xl" />

      <section
        className={twMerge(
          "flex flex-col",
          loginState.value !== "uninitiated" &&
            "-motion-translate-x-out-150",
        )}
      >
        <LoginMethodSelection />
      </section>
    </div>
  );
}
