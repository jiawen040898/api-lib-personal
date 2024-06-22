"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrorInSentry = exports.setupSentry = void 0;
const integrations_1 = require("@sentry/integrations");
const Sentry = __importStar(require("@sentry/node"));
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const setupSentry = (configService) => {
    const env = configService.get('env', constants_1.configOpts);
    const awsRegion = configService.get('awsRegion', constants_1.configOpts);
    Sentry.init({
        dsn: configService.get('sentryDsn', constants_1.configOpts),
        environment: env,
        release: configService.get('apiInfo', constants_1.configOpts).buildVersion,
        enabled: !utils_1.environmentUtil.isDevelopment(env),
        integrations: [
            new integrations_1.RewriteFrames({
                root: process.cwd(),
            }),
        ],
    });
    Sentry.setTag('aws_region', awsRegion);
};
exports.setupSentry = setupSentry;
const logErrorInSentry = (serviceName, request, errorTitle, context, filterName, exception, statusCode, error) => {
    const url = request?.url;
    const requestHeaders = request?.headers;
    const requestBody = request?.body;
    const userInfo = request?.user;
    const xRequestId = (requestHeaders?.['x-request-id'] || 'n/a');
    const requestId = (requestHeaders?.['requestid'] || 'n/a');
    if (userInfo) {
        Sentry.setUser({
            id: userInfo.user_account_id?.toString(),
            email: userInfo.email,
            company_id: userInfo.company_id,
            company_slug: userInfo.company_slug,
        });
    }
    const wrappedException = new ExceptionWrapper(`${exception.name} ${exception.message}`, `(${statusCode}) ${errorTitle}`, exception);
    Sentry.captureException(wrappedException, {
        level: 'error',
        tags: {
            service_name: serviceName,
            x_request_id: xRequestId,
            request_id: requestId,
            url: url,
        },
        extra: {
            error,
            headers: JSON.stringify(requestHeaders),
            context: JSON.stringify(context),
            body: requestBody,
            filter_src: filterName,
        },
    });
};
exports.logErrorInSentry = logErrorInSentry;
class ExceptionWrapper extends Error {
    constructor(message, name, error) {
        super(message);
        this.name = name;
        this.stack = error.stack;
    }
}
//# sourceMappingURL=sentry.service.js.map