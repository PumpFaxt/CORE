import { Application, Router } from "@oak/oak";

const router = new Router();

router.post("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = ctx;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 9090 });
