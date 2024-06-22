"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHttpServerConfigurations = void 0;
const setupHttpServerConfigurations = (app) => {
    const httpAdapter = app.getHttpAdapter();
    const server = httpAdapter.getHttpServer();
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;
};
exports.setupHttpServerConfigurations = setupHttpServerConfigurations;
//# sourceMappingURL=http-server.config.js.map