import { Elysia } from "elysia";
import { cors } from "@elysia/cors";

import { openapi } from "@elysia/openapi";


import { schema, schemaZod } from "./schema";

// 单纯的API入口
export const app = new Elysia({ prefix: "/api" })
  .use(cors())
  .use(
    openapi({
      documentation: {
        info: {
          title: "Bun Elysia Fullstack API",
          version: "1.0.0",
        },
      },
    }),
  )
  .get(
    "/hello",
    () => ({
      message: "Hello from Elysia!",
      runtime: "bun",
      framework: "elysia",
    }),
    {
      response: {
        200: schema,
      }
    },
  )
  .get(
    "/helloZod",
    () => ({
      message: "Hello from Elysia!",
      runtime: "bun",
      framework: "elysia,with Zod!",
    }),
    {
      response: {
        200: schemaZod,
      }
    },
  );

export type App = typeof app;
