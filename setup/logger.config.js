"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerConfig = void 0;
const config_1 = require("@nestjs/config");
const constants_1 = require("../constants");
const serializers_1 = require("../serializers");
const utils_1 = require("../utils");
exports.loggerConfig = {
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (configService) => {
        const requestsSeen = new WeakSet();
        const region = configService.get('awsRegion', constants_1.configOpts);
        const version = configService.get('apiInfo', constants_1.configOpts).buildVersion;
        const exclude = configService.get('logging', constants_1.configOpts).excludeRoutes;
        const logLevel = configService.get('logging', constants_1.configOpts).level;
        const shouldLogHttpReq = configService.get('logging', constants_1.configOpts).shouldLogHttpReq;
        return {
            pinoHttp: {
                level: logLevel,
                genReqId: (req) => req.headers[constants_1.HttpHeader.REQUEST_ID],
                autoLogging: shouldLogHttpReq,
                redact: constants_1.LogRedactKeys,
                serializers: serializers_1.defaultSerializers,
                nestedKey: 'metadata',
                customProps: (_, res) => {
                    const req = res.req;
                    if (!res.finished || requestsSeen.has(req)) {
                        return {
                            environment: {
                                region,
                                version,
                            },
                            user_detail: utils_1.loggerUtil.getUserDetailFromRequest(req),
                        };
                    }
                    requestsSeen.add(req);
                    return {
                        route: utils_1.loggerUtil.getRouteFromRequest(req),
                        route_params: utils_1.loggerUtil.getRouteParamsFromRequest(req),
                    };
                },
                customAttributeKeys: {
                    responseTime: 'response_time_in_ms',
                },
            },
            exclude,
        };
    },
};
//# sourceMappingURL=logger.config.js.map