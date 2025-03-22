import { Hono } from "hono";
import { cors } from "hono/cors";
import dummy from "./routes/dummy";
import access from "./routes/access";
import tokens from "./routes/tokens";

const app = new Hono();

app.use(
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
);

app.route("dummy", dummy);
app.route("access", access);
app.route("tokens", tokens);

let servedSessions = 0;
app.get("/stats", async (ctx) => {
    servedSessions++;
    const privyAppId = Bun.env.PRIVY_APP_ID;
    return ctx.json({
        servedSessions,
        privyAppId,
    });
});

export default app;
