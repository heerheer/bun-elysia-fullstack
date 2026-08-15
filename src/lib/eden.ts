import { edenTreaty } from '@elysia/eden';
import type { App } from '@server/app';

const apiBaseUrl = process.env.PUBLIC_API_URL ?? 'http://localhost:3000';

export const api = edenTreaty<App>(apiBaseUrl);
