"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEventsListener = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
class BaseEventsListener {
    constructor(serviceName, logger) {
        this.serviceName = serviceName;
        this.logger = logger;
    }
    async safeInvokeActions(promises) {
        const results = await Promise.allSettled(promises);
        results
            .filter((r) => r.status === 'rejected')
            .forEach((r) => {
            const error = r.reason;
            const errorTitle = 'Error occurred while method was invoked in EventListener';
            this.logger.error({ error }, errorTitle);
            (0, services_1.logErrorInSentry)(this.serviceName, {}, errorTitle, { error }, 'EventListener', error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
}
exports.BaseEventsListener = BaseEventsListener;
//# sourceMappingURL=base-event.listener.js.map