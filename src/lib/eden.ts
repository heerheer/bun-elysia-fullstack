import { edenTreaty } from '@elysia/eden';
import type { App } from '@server/app';

const apiBaseUrl = process.env.PUBLIC_API_URL;

export const api = edenTreaty<App>(apiBaseUrl);
