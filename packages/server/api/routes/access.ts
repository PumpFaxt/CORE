import { Hono } from "hono";
import contracts from "../lib/evm/contracts";
import ensureUser from "../middlewares/ensureUser";
import db from "../lib/db";
import { users } from "../lib/db/schema/user";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { zJsonStringSchema } from "../lib/utils";

const app = new Hono()
    .get("/evm-nonce", ensureUser, async (ctx) => {
        const { user } = ctx.var;

        const evmNonce = await contracts.relayManager.read.nonceOf([
            user.address,
        ]);
        const nonce = `${evmNonce}`;

        return ctx.json({ nonce }, 200);
    })
    .post(
        "/frxusd-permit",
        ensureUser,
        zValidator(
            "json",
            z.object({
                req: zJsonStringSchema,
            }),
        ),
        async (ctx) => {
            const { user } = ctx.var;

            if (user.frxUsdPermitted) return ctx.text("Already permitted", 200);

            const { req } = ctx.req.valid("json");

            if (req[0] !== user.address) {
                return ctx.text("Privy User not same as txn request", 401);
            }
            if (req[1] !== contracts.master.address) {
                return ctx.text("Granting allowance to invalid contract", 401);
            }

            try {
                await contracts.frxUsd.write.permit(req);

                await db.update(users).set({ frxUsdPermitted: true }).where(
                    eq(users.id, user.id),
                );

                return ctx.text("Allowance Granted", 201);
            } catch (e) {
                return ctx.text("Error granting allowance", 500);
            }
        },
    );

export default app;
