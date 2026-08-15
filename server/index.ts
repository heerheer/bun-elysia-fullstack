import { app } from "@server/app";
import { staticPlugin } from "@elysia/static";
import { Elysia } from "elysia";

const port = Number(process.env.PORT ?? 3000);

new Elysia()
  .use(app)
  .use(
    await staticPlugin({
      assets: "public",
      prefix: "/",
    }),
  )
  .listen({
    hostname: "0.0.0.0",
    port,
  });

console.log(`🦊 Elysia server running at http://localhost:${port}`);
console.log(`📘 OpenAPI docs available at http://localhost:${port}/openapi`);
