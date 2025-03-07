import { Hono } from "hono";
import { logger } from "hono/logger";
import api from "./api";

const htmlFile = Bun.file("./template.html");
const html = await htmlFile.text();

const app = new Hono();

app.use(logger());

app.route("api", api);

app.get("*", (c) => c.html(html));

export default app;
