import { app } from '@server/app';

const port = Number(process.env.PORT ?? 3000);

app.listen(port);

console.log(`🦊 Elysia server running at http://localhost:${port}`);
console.log(`📘 OpenAPI docs available at http://localhost:${port}/openapi`);
