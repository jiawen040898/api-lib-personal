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
exports.M2MTokenService = void 0;
const common_1 = require("@nestjs/common");
const auth0_1 = require("auth0");
const builders_1 = require("../builders");
const constants_1 = require("../constants");
const enums_1 = require("../enums");
const utils_1 = require("../utils");
const cache_service_1 = require("./cache.service");
let M2MTokenService = class M2MTokenService {
    constructor(cacheService) {
        this.cacheService = cacheService;
        this.offsetTtl = 30;
    }
    async getAuthorizationHeader(request) {
        const token = await this.getAccessToken(request);
        const headers = new builders_1.AxiosHeaderBuilder()
            .addBearerAuthorizationToken(token)
            .addAcceptGzipEncoding()
            .build();
        return headers;
    }
    async getAccessToken(request) {
        const cacheKey = utils_1.generatorUtil.cacheKey(constants_1.M2MTokenCacheKey, request.clientId);
        let token = await this.cacheService.get(cacheKey);
        if (token) {
            return token.access_token;
        }
        const client = new auth0_1.AuthenticationClient({
            domain: request.domain,
            clientId: request.clientId,
            clientSecret: request.clientSecret,
        });
        try {
            token = await client.clientCredentialsGrant({
                audience: request.audience,
            });
            await this.cacheService.set(cacheKey, token, (token.expires_in - this.offsetTtl) * 1000);
            return token.access_token;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(enums_1.AuthErrorMessage.FAILED_GET_TOKEN, { cause: error });
        }
    }
};
exports.M2MTokenService = M2MTokenService;
exports.M2MTokenService = M2MTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cache_service_1.CacheService])
], M2MTokenService);
//# sourceMappingURL=m2m-token.service.js.map