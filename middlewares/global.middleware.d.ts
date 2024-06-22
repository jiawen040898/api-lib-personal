import { BearerTokenMiddleware } from './bearer-token.middleware';
import { RequestIdMiddleware } from './request-id.middleware';
export declare const globalMiddlewares: (typeof BearerTokenMiddleware | typeof RequestIdMiddleware)[];
