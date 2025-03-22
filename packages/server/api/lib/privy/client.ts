import { PrivyClient } from "@privy-io/server-auth";
import env from "../../../env";

const privyClient = new PrivyClient(
    env.PRIVY_APP_ID,
    env.PRIVY_APP_SECRET,
);

export default privyClient;
