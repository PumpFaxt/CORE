import Icon from "../../shared/components/Icon.tsx";
import FlexSeparator from "../../shared/components/FlexSeparator.tsx";
import RiskWarningBanner from "../../shared/components/RiskWarningBanner.tsx";
import LoginWithEmail from "../login/LoginWithEmail.tsx";
import Divider from "../../shared/components/Divider.tsx";

export default function () {
    // initOAuth();
    // loginWithOAuth();
    return (
        <div className={"p-page flex flex-col"}>
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

            <LoginWithEmail />

            <Divider className="my-8">
                <span className={"text-xs px-3 text-foreground/50"}>OR</span>
            </Divider>
        </div>
    );
}
