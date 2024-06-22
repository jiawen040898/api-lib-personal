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
var HttpExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const constants_1 = require("../constants");
const enums_1 = require("../enums");
const sentry_service_1 = require("../services/sentry.service");
const utils_1 = require("../utils");
let HttpExceptionFilter = HttpExceptionFilter_1 = class HttpExceptionFilter {
    constructor(logger, configService) {
        this.logger = logger;
        this.serviceName = configService.get('apiInfo', constants_1.configOpts).buildName;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const err = exception.getResponse();
        const message = err?.message || err.toString();
        const statusCode = exception.getStatus() || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (statusCode >= common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            const exceptionExtras = utils_1.exceptionUtil.getExceptionExtras(exception);
            this.logger.error(exception.message, exceptionExtras);
            const request = ctx.getRequest();
            (0, sentry_service_1.logErrorInSentry)(this.serviceName, request, message, exceptionExtras, HttpExceptionFilter_1.name, exception, statusCode, err);
        }
        response
            .status(statusCode)
            .json(getStatusResponse(message, statusCode, exception));
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = HttpExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [nestjs_pino_1.Logger,
        config_1.ConfigService])
], HttpExceptionFilter);
const statusResponseMappings = {
    [common_1.HttpStatus.BAD_REQUEST]: (message, errorDetails) => ({
        data: null,
        meta: {
            type: enums_1.ErrorMessage.INVALID,
            message,
            error_details: errorDetails,
        },
    }),
    [common_1.HttpStatus.UNAUTHORIZED]: (message) => ({
        data: null,
        meta: {
            type: enums_1.ErrorMessage.AUTH,
            message,
        },
    }),
};
function getStatusResponse(message, statusCode, exception) {
    const response = statusResponseMappings[statusCode];
    if (response) {
        const errorDescription = exception['options']?.description;
        const errorDetails = errorDescription
            ? JSON.parse(errorDescription)
            : undefined;
        return response(message, errorDetails);
    }
    return {
        data: null,
        meta: {
            type: enums_1.ErrorMessage.DEFAULT,
            message,
        },
    };
}
//# sourceMappingURL=http-exception.filter.js.map