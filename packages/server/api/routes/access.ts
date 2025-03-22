import { Hono } from "hono";
import { getPrivyUserFromContext } from "../lib/privy";
import contracts from "../lib/evm/contracts";
import { isAddress } from "viem";
import ensureUser from "../middlewares/ensureUser";
import db from "../lib/db";
import { users } from "../lib/db/schema/user";
import { eq } from "drizzle-orm";

const app = new Hono();

app.get("/evm-nonce", ensureUser, async (ctx) => {
    const { user } = ctx.var;

    const nonce = await contracts.relayManager.read.nonceOf([
        user.address,
    ]);
    return ctx.json({ nonce: nonce.toString() }, 200);
});

app.post("/frxusd-permit", ensureUser, async (ctx) => {
    const { user } = ctx.var;

    if (user.frxUsdPermitted) return ctx.text("Already permitted", 200);

    const { req: metaRequest } = await ctx.req.json();
    if (typeof metaRequest != "string") {
        return ctx.text("Missing request parameter", 400);
    }

    const req = JSON.parse(metaRequest);

    if (req[0] !== user.address) {
        return ctx.text("Privy User not same as txn request", 401);
    }
    if (req[1] !== contracts.master.address) {
        return ctx.text("Granting allowance to invalid contract", 401);
    }

    try {
        await contracts.frxUsd.write.permit(req);

        db.update(users).set({ frxUsdPermitted: true }).where(
            eq(users.id, user.id),
        );

        return ctx.text("Allowance Granted", 201);
    } catch (e) {
        return ctx.text("Error granting allowance", 500);
    }
});

export default app;
