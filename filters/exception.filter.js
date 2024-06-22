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
var ExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const nestjs_pino_1 = require("nestjs-pino");
const constants_1 = require("../constants");
const sentry_service_1 = require("../services/sentry.service");
const utils_1 = require("../utils");
let ExceptionsFilter = ExceptionsFilter_1 = class ExceptionsFilter extends core_1.BaseExceptionFilter {
    constructor(app, logger, configService) {
        super(app.get(core_1.HttpAdapterHost).httpAdapter);
        this.logger = logger;
        this.serviceName = configService.get('apiInfo', constants_1.configOpts).buildName;
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const exceptionExtras = utils_1.exceptionUtil.getExceptionExtras(exception);
        if (utils_1.exceptionUtil.isException(exception)) {
            this.logger.error(exception.message, exceptionExtras);
        }
        (0, sentry_service_1.logErrorInSentry)(this.serviceName, ctx.getRequest(), 'Error', exceptionExtras, ExceptionsFilter_1.name, exception, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        super.catch(exception, host);
    }
};
exports.ExceptionsFilter = ExceptionsFilter;
exports.ExceptionsFilter = ExceptionsFilter = ExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [Object, nestjs_pino_1.Logger,
        config_1.ConfigService])
], ExceptionsFilter);
//# sourceMappingURL=exception.filter.js.map