import { edenTreaty } from '@elysia/eden';
import type { App } from '@server/app';

export const api = edenTreaty<App>(".");
