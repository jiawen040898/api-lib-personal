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
exports.PublisherService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const constants_1 = require("../constants");
const sns_base_service_1 = require("./sns-base.service");
let PublisherService = class PublisherService extends sns_base_service_1.SNSBaseService {
    constructor(logger, configService) {
        super(configService.get('sns', constants_1.configOpts), logger);
        this.logger = logger;
    }
};
exports.PublisherService = PublisherService;
exports.PublisherService = PublisherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)(PublisherService.name)),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger,
        config_1.ConfigService])
], PublisherService);
//# sourceMappingURL=publisher.service.js.map