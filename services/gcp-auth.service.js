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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpAuthService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
let GcpAuthService = class GcpAuthService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        const env = configService.get('env', constants_1.configOpts);
        this.isDevelopment = utils_1.environmentUtil.isDevelopment(env);
    }
    async refreshOIDCAccessToken() {
        if (this.isDevelopment) {
            return;
        }
        const now = utils_1.dateTimeUtil.now();
        const expiration = new Date(process.env.AWS_SESSION_EXPIRATION ?? '');
        const fiveMinutesBeforeExpiration = new Date(expiration.getTime() - 5 * 60 * 1000);
        if (process.env.AWS_SESSION_TOKEN &&
            process.env.AWS_SESSION_EXPIRATION &&
            utils_1.dateTimeUtil.compareDate(now, fiveMinutesBeforeExpiration) === -1) {
            return;
        }
        const responseData = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`${constants_1.awsTaskEndpointUri}${process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI}`));
        process.env.AWS_ACCESS_KEY_ID = responseData.data.AccessKeyId;
        process.env.AWS_SECRET_ACCESS_KEY = responseData.data.SecretAccessKey;
        process.env.AWS_SESSION_TOKEN = responseData.data.Token;
        process.env.AWS_SESSION_EXPIRATION = responseData.data.Expiration;
    }
};
exports.GcpAuthService = GcpAuthService;
exports.GcpAuthService = GcpAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], GcpAuthService);
//# sourceMappingURL=gcp-auth.service.js.map