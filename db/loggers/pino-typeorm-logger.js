"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinoTypeormLogger = void 0;
const utils_1 = require("../../utils");
class PinoTypeormLogger {
    constructor(logger, env) {
        this.logger = logger;
        this.env = env;
        logger.logger.useOnlyCustomLevels = true;
    }
    logQuery(query, parameters, _queryRunner) {
        if (this.logger.logger.levelVal <= 30) {
            return;
        }
        parameters = this.redactParameters(parameters);
        this.logger.info({
            sql: query,
            parameters,
        });
    }
    logQueryError(error, query, parameters, _queryRunner) {
        parameters = this.redactParameters(parameters);
        this.logger.error({
            error,
            sql: query,
            parameters,
        });
    }
    logQuerySlow(time, query, parameters, _queryRunner) {
        parameters = this.redactParameters(parameters);
        this.logger.warn({
            message: '==SLOW QUERIES DETECTED==',
            time,
            sql: query,
            parameters,
        });
    }
    logSchemaBuild(message, _queryRunner) {
        this.logger.debug(message);
    }
    logMigration(message, _queryRunner) {
        this.logger.debug(message);
    }
    log(level, message, _queryRunner) {
        switch (level) {
            case 'log':
            case 'info':
                this.logger.info({ message });
                break;
            case 'warn':
                this.logger.warn({ message });
                break;
        }
    }
    stringifyParams(parameters) {
        try {
            return JSON.stringify(parameters);
        }
        catch (error) {
            return parameters;
        }
    }
    redactParameters(parameters) {
        if (parameters?.length && utils_1.environmentUtil.isProduction(this.env)) {
            return ['Redacted'];
        }
        return parameters;
    }
}
exports.PinoTypeormLogger = PinoTypeormLogger;
//# sourceMappingURL=pino-typeorm-logger.js.map