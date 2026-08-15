import { Elysia } from 'elysia';
import { cors } from '@elysia/cors';
import { staticPlugin } from '@elysia/static';
import { openapi } from '@elysia/openapi';

export const app = new Elysia({ prefix: '/api' })
  .use(cors())
  .use(staticPlugin())
  .use(
    openapi({
      documentation: {
        info: {
          title: 'Bun Elysia Fullstack API',
          version: '1.0.0'
        }
      }
    })
  )
  .get('/hello', () => ({
    message: 'Hello from Elysia!',
    runtime: 'bun',
    framework: 'elysia'
  }));

export type App = typeof app;
