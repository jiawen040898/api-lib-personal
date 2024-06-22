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
exports.BearerTokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_1 = require("@pulsifi/auth");
const constants_1 = require("../constants");
const services_1 = require("../services");
let BearerTokenMiddleware = class BearerTokenMiddleware {
    constructor(awsCognitoService, configService) {
        this.awsCognitoService = awsCognitoService;
        const providers = configService.get('jwtProviders', constants_1.configOpts);
        this.resourceVerifyOptions = (0, auth_1.buildVerifyOptions)(providers.resource);
        this.cognitoVerifyOptions = (0, auth_1.buildVerifyOptions)(providers.awsCognito);
        this.enterpriseVerifyOptions = (0, auth_1.buildVerifyOptions)(providers.enterprise);
        this.defaultVerifyOptions = (0, auth_1.buildVerifyOptions)(providers.default);
    }
    async use(req, _res, next) {
        try {
            req.user = await this.getUserInfo(req);
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.message || auth_1.AuthErrorMessage.INVALID, {
                cause: err,
            });
        }
        next();
    }
    getUserInfo(req) {
        const token = (0, auth_1.getAuthorizationToken)(req.headers);
        const payload = (0, auth_1.decodeJwtTokenOnly)(token);
        switch (true) {
            case payload.iss?.includes('resource'):
                return (0, auth_1.verifyTokenAndGetResourceInfo)(token, this.resourceVerifyOptions);
            case payload.iss?.includes('cognito'):
                return this.getAwsCognitoUserInfo(token, payload.scope);
            case payload.iss?.includes('enterprise'):
                return (0, auth_1.verifyTokenAndGetUserInfo)(token, this.enterpriseVerifyOptions);
            default:
                return (0, auth_1.verifyTokenAndGetUserInfo)(token, this.defaultVerifyOptions);
        }
    }
    async getAwsCognitoUserInfo(token, scope) {
        const tokenInfo = await (0, auth_1.verifyTokenAndGetAwsCognitoInfo)(token, this.cognitoVerifyOptions);
        let cognitoUserInfo = tokenInfo;
        if (!tokenInfo['custom:profile_id']) {
            cognitoUserInfo = await this.awsCognitoService.getUserInfo(tokenInfo.sub, token, scope);
        }
        return {
            email: cognitoUserInfo.email,
            sub: cognitoUserInfo.sub,
            user_account_id: Number(cognitoUserInfo['custom:user_account_id']),
            profile_id: cognitoUserInfo['custom:profile_id'],
            app: constants_1.WebApp.CANDIDATE,
            first_name: cognitoUserInfo.given_name,
            last_name: cognitoUserInfo.family_name,
            display_name: `${cognitoUserInfo.given_name} ${cognitoUserInfo.family_name}`,
            roles: [auth_1.AppModuleRole.candidate.candidate],
            force_change_password: false,
            identity_provider: 'aws_cognito',
        };
    }
};
exports.BearerTokenMiddleware = BearerTokenMiddleware;
exports.BearerTokenMiddleware = BearerTokenMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.AwsCognitoService,
        config_1.ConfigService])
], BearerTokenMiddleware);
//# sourceMappingURL=bearer-token.middleware.js.map