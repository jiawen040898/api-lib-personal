"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmModuleFactory = void 0;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const loggers_1 = require("../loggers");
const getLogger = (logger, configService) => {
    const env = configService.get('env', constants_1.configOpts);
    return utils_1.environmentUtil.isDevelopment(env)
        ? undefined
        : new loggers_1.PinoTypeormLogger(logger, env);
};
const typeOrmModuleFactory = async (configService, logger) => {
    return {
        ...configService.get('database'),
        logger: getLogger(logger, configService),
    };
};
exports.typeOrmModuleFactory = typeOrmModuleFactory;
//# sourceMappingURL=typeorm-module.factory.js.map