import { Hono } from "hono";
import { cors } from "hono/cors";
import dummy from "./routes/dummy";
import access from "./routes/access";
import tokens from "./routes/tokens";
import users from "./routes/users";

let servedSessions = 0;
const app = new Hono()
    .use(
        cors({
            origin: (origin, ctx) => {
                const selfUrl = new URL(ctx.req.url);
                const selfOrigin = selfUrl.origin;
                if (!origin || origin === selfOrigin) {
                    return origin;
                }
                return "";
            },
            credentials: true,
            allowMethods: ["POST", "GET", "PATCH", "OPTIONS"],
            allowHeaders: ["Content-Type", "Authorization"],
        }),
    )
    .route("dummy", dummy)
    .route("access", access)
    .route("tokens", tokens)
    .route("users", users)
    .get("/stats", async (ctx) => {
        servedSessions++;
        const privyAppId = Bun.env.PRIVY_APP_ID;
        return ctx.json({
            servedSessions,
            privyAppId,
        });
    });

export default app;

export type API = typeof app;
