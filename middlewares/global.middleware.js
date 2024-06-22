"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalMiddlewares = void 0;
const bearer_token_middleware_1 = require("./bearer-token.middleware");
const request_id_middleware_1 = require("./request-id.middleware");
exports.globalMiddlewares = [bearer_token_middleware_1.BearerTokenMiddleware, request_id_middleware_1.RequestIdMiddleware];
//# sourceMappingURL=global.middleware.js.map