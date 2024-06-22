"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const utils_1 = require("../utils");
let RouteLoggingInterceptor = class RouteLoggingInterceptor {
    constructor(logger) {
        this.logger = logger;
    }
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        this.logger.assign({
            route: utils_1.loggerUtil.getRouteFromRequest(req),
            route_params: utils_1.loggerUtil.getRouteParamsFromRequest(req),
        });
        return next.handle();
    }
};
exports.RouteLoggingInterceptor = RouteLoggingInterceptor;
exports.RouteLoggingInterceptor = RouteLoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)()),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger])
], RouteLoggingInterceptor);
//# sourceMappingURL=route-logging.interceptor.js.map