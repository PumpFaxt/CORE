import { Hono } from "hono";
import { coins } from "../data/coins";
import contracts from "../lib/evm/contracts";

const app = new Hono();

app.post("/new", async (ctx) => {
    const metaRequest = ctx.req.query("signature");
    contracts.master.write.metaLaunchToken()
    return ctx.json({ coins });
});

export default app;
