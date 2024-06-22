"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSerializers = void 0;
const pino_std_serializers_1 = require("pino-std-serializers");
exports.defaultSerializers = {
    req: (request) => {
        const { req } = (0, pino_std_serializers_1.mapHttpRequest)(request);
        const newReq = {
            ...req,
            headers: {
                ...req.headers,
                authorization: '***',
            },
        };
        return newReq;
    },
};
//# sourceMappingURL=default.serializer.js.map