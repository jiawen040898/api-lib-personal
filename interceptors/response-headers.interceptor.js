"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHeadersInterceptor = void 0;
const common_1 = require("@nestjs/common");
let ResponseHeadersInterceptor = class ResponseHeadersInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        response
            .setHeader('cache-control', 'no-cache, no-store, max-age=0, must-revalidate')
            .removeHeader('x-powered-by');
        return next.handle();
    }
};
exports.ResponseHeadersInterceptor = ResponseHeadersInterceptor;
exports.ResponseHeadersInterceptor = ResponseHeadersInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseHeadersInterceptor);
//# sourceMappingURL=response-headers.interceptor.js.map