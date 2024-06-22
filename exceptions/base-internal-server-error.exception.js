"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInternalServerErrorException = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
class BaseInternalServerErrorException extends common_1.InternalServerErrorException {
    constructor(message, error, errorDetails) {
        super(message, {
            cause: BaseInternalServerErrorException.parseError(error),
            description: JSON.stringify(errorDetails),
        });
    }
    static parseError(error) {
        if (error instanceof axios_1.AxiosError && error.isAxiosError) {
            return {
                message: error.message,
                stack: error.stack,
                code: error.code,
                cause: error.cause,
                request: {
                    method: error.request?.method,
                    host: error.request?.host,
                    path: error.request?.path,
                },
                response: {
                    status: error.response?.status,
                    data: error.response?.data,
                    url: error.request?.res.responseUrl,
                },
            };
        }
        return error;
    }
}
exports.BaseInternalServerErrorException = BaseInternalServerErrorException;
//# sourceMappingURL=base-internal-server-error.exception.js.map