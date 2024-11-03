import fs from "node:fs";
import path from "node:path";

import express from "npm:express";
import type { NextFunction, Request, Response } from "npm:express";

import { createServer as createViteServer } from "npm:vite";

// import { Application } from "jsr:@oak/oak/application";

async function main() {
  const app = express();

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);

  app.use("*", async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(
        path.resolve(globalThis.__dirname, "index.html"),
        "utf-8",
      );

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.js");

      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back.
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      //@ts-ignore : needs to be ignored here
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  await app.listen({ port: 3173 });
}

main();
