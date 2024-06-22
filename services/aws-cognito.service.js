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
exports.AwsCognitoService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const rxjs_1 = require("rxjs");
const constants_1 = require("../constants");
const interfaces_1 = require("../interfaces");
const utils_1 = require("../utils");
const cache_service_1 = require("./cache.service");
let AwsCognitoService = class AwsCognitoService {
    constructor(httpService, configService, cacheService, logger) {
        this.httpService = httpService;
        this.configService = configService;
        this.cacheService = cacheService;
        this.logger = logger;
        const awsCognitoProvider = this.configService.get('jwtProviders', constants_1.configOpts)?.awsCognito;
        this.baseUrl = awsCognitoProvider?.apiUri;
        this.issuerUri = awsCognitoProvider?.issuer;
    }
    async getUserInfo(tokenSub, authorizationHeader, scope) {
        if (!this.baseUrl || !this.issuerUri) {
            throw new common_1.InternalServerErrorException(constants_1.AwsCognitoServiceError.API_URL_UNDEFINED);
        }
        if (!tokenSub || !authorizationHeader || !scope) {
            throw new common_1.InternalServerErrorException(constants_1.AwsCognitoServiceError.INVALID_TOKEN_OR_AUTHORIZATION_HEADER);
        }
        const cacheKey = utils_1.generatorUtil.cacheKey(constants_1.AWS_COGNITO_USER_SUB_CACHE_KEY, tokenSub);
        const result = await this.cacheService.get(cacheKey);
        if (result) {
            return result;
        }
        const userInfo = await (scope.includes('openid')
            ? this.getOAuth2UserInfo(authorizationHeader)
            : this.getIdpServiceUserInfo(authorizationHeader));
        await this.cacheService.set(cacheKey, userInfo);
        return userInfo;
    }
    async getOAuth2UserInfo(authorizationHeader) {
        const path = `${this.baseUrl}/oauth2/userInfo`;
        try {
            const responseData = await (0, rxjs_1.lastValueFrom)(this.httpService.get(path, {
                headers: {
                    authorization: `Bearer ${authorizationHeader}`,
                },
            }));
            return responseData.data;
        }
        catch (error) {
            this.logger.error({ path }, constants_1.AwsCognitoServiceError.FAILED_GET_OAUTH2_USER_INFO, error);
            throw new common_1.InternalServerErrorException(constants_1.AwsCognitoServiceError.FAILED_GET_OAUTH2_USER_INFO, { cause: error });
        }
    }
    async getIdpServiceUserInfo(authorizationHeader) {
        const path = this.issuerUri;
        try {
            const responseData = await (0, rxjs_1.lastValueFrom)(this.httpService.post(path, `{"AccessToken":"${authorizationHeader}"}`, {
                headers: {
                    'x-amz-target': 'AWSCognitoIdentityProviderService.GetUser',
                    'content-type': 'application/x-amz-json-1.1',
                },
            }));
            return this.buildAwsCognitoUserInfo(responseData.data);
        }
        catch (error) {
            this.logger.error({ path }, constants_1.AwsCognitoServiceError.FAILED_GET_IDP_USER_INFO, error);
            throw new common_1.InternalServerErrorException(constants_1.AwsCognitoServiceError.FAILED_GET_IDP_USER_INFO, { cause: error });
        }
    }
    buildAwsCognitoUserInfo(data) {
        return Object.values(interfaces_1.AwsCognitoUserAttribute).reduce((acc, name) => ({
            ...acc,
            [name]: data.UserAttributes.find((attr) => attr.Name === name)
                .Value,
        }), {});
    }
};
exports.AwsCognitoService = AwsCognitoService;
exports.AwsCognitoService = AwsCognitoService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, nestjs_pino_1.InjectPinoLogger)(AwsCognitoService.name)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        cache_service_1.CacheService,
        nestjs_pino_1.PinoLogger])
], AwsCognitoService);
//# sourceMappingURL=aws-cognito.service.js.map