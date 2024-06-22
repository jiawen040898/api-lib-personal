"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalInterceptors = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const _1 = require(".");
const globalInterceptors = (app) => [
    new _1.ResponseHeadersInterceptor(),
    new _1.ResponseInterceptor(),
    new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)),
];
exports.globalInterceptors = globalInterceptors;
//# sourceMappingURL=global.interceptor.js.map