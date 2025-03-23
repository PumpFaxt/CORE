import { Hono } from "hono";
import { coins } from "../data/coins";
import ensureUser from "../middlewares/ensureUser";
import db from "../lib/db";
import { users } from "../lib/db/schema/user";
import { eq } from "drizzle-orm";

const app = new Hono()
    .get("/:id", async (ctx) => {
        const { 0: user } = await db.select({
            id: users.address,
            address: users.address,
            createdAt: users.createdAt,
        }).from(users).where(
            eq(users.id, Number(ctx.req.param("id"))),
        ).limit(1);

        return ctx.json({ user }, 200);
    });

export default app;
