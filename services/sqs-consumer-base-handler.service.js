"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsConsumerBaseHandler = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const sentry_service_1 = require("./sentry.service");
class SqsConsumerBaseHandler {
    constructor(logger, configService) {
        this.logger = logger;
        this.serviceName = configService.get('apiInfo', constants_1.configOpts).buildName;
    }
    logError(error, sqsName, message) {
        const errorTitle = `Error occurred while processing message on ${sqsName}`;
        this.logger.error({ error }, errorTitle);
        (0, sentry_service_1.logErrorInSentry)(this.serviceName, {}, errorTitle, message, '', error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.SqsConsumerBaseHandler = SqsConsumerBaseHandler;
//# sourceMappingURL=sqs-consumer-base-handler.service.js.map