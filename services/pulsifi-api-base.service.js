"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PulsifiApiBaseService = void 0;
const builders_1 = require("../builders");
class PulsifiApiBaseService {
    constructor(m2mTokenService, auth0Config) {
        this.m2mTokenService = m2mTokenService;
        this.auth0Config = auth0Config;
    }
    async getConfig() {
        const token = await this.m2mTokenService.getAccessToken({
            domain: this.auth0Config.domain,
            clientId: this.auth0Config.clientId,
            clientSecret: this.auth0Config.clientSecret,
            audience: this.auth0Config.audience,
        });
        const headers = new builders_1.AxiosHeaderBuilder()
            .addBearerAuthorizationToken(token)
            .build();
        return {
            headers,
        };
    }
}
exports.PulsifiApiBaseService = PulsifiApiBaseService;
//# sourceMappingURL=pulsifi-api-base.service.js.map