import { createMiddleware } from "hono/factory";
import { getPrivyUserFromContext } from "../lib/privy";
import db from "../lib/db";
import { eq } from "drizzle-orm";
import { users } from "../lib/db/schema/user";
import { DB } from "../lib/db/schema";
import { Address, isAddress } from "viem";

const ensureUser = createMiddleware<{
    Variables: {
        user: DB["user"] & {address : Address};
    };
}>(async (ctx, next) => {
    const privyUser = await getPrivyUserFromContext(ctx);
    if (!privyUser) return ctx.text("Unauthorized", 401);

    const privyId = privyUser.id;

    let { 0: user } = await db.select().from(users).where(
        eq(users.privyId, privyId),
    )
        .limit(1);

    if (!user) {
        const address = privyUser.wallet?.address;

        if (!address) return ctx.text("Missing embedded wallet", 401);
        if (!isAddress(address)) {
            return ctx.text(
                "Invalid EVM wallet retrieved from Privy",
                401,
            );
        }

        const { 0: newUser } = await db.insert(users).values({
            address,
            privyId,
        }).returning();

        user = newUser;
    }

    ctx.set("user", user as DB["user"] & {address : Address});
    await next();
});

export default ensureUser;
