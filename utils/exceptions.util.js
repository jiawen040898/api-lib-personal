"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionUtil = void 0;
const lodash_1 = require("lodash");
exports.exceptionUtil = {
    isException: (err) => {
        return (0, lodash_1.isObject)(err) && !!err.message;
    },
    getExceptionExtras(exception) {
        const body = exception.req?.body;
        if (body && Object.keys(body).length) {
            return body;
        }
        const req = exception.request || exception.response?.request;
        const host = req?.host;
        const path = req?.path;
        const method = req?.method;
        const res = exception.response?.response || exception.response;
        const meta = res?.data?.meta;
        const cause = exception.cause;
        const stack = exception.stack;
        const description = exception.options?.description;
        return {
            host,
            path,
            method,
            meta: meta ? JSON.stringify(meta) : undefined,
            cause,
            description,
            stack,
        };
    },
};
//# sourceMappingURL=exceptions.util.js.map