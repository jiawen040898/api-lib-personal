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
var FeatureToggleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedToGetUnleashEnabledFlagException = exports.FeatureToggleService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const unleash_client_1 = require("unleash-client");
const exceptions_1 = require("../exceptions");
let FeatureToggleService = FeatureToggleService_1 = class FeatureToggleService {
    constructor(configService) {
        this.unleashConfig = configService.get('unleash');
    }
    async isFeatureOn(flag, unleashContext) {
        try {
            if (!FeatureToggleService_1.unleash) {
                FeatureToggleService_1.unleash = await this.initUnleash();
            }
            return FeatureToggleService_1.unleash.isEnabled(flag, unleashContext);
        }
        catch (error) {
            throw new FailedToGetUnleashEnabledFlagException(error);
        }
    }
    initUnleash() {
        return (0, unleash_client_1.startUnleash)({
            url: this.unleashConfig.apiUrl,
            appName: this.unleashConfig.projectId,
            customHeaders: { Authorization: this.unleashConfig.apiKey },
        });
    }
};
exports.FeatureToggleService = FeatureToggleService;
FeatureToggleService.unleash = null;
exports.FeatureToggleService = FeatureToggleService = FeatureToggleService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FeatureToggleService);
var UnleashErrorCode;
(function (UnleashErrorCode) {
    UnleashErrorCode["FAILED_TO_GET_UNLEASH_ENABLED_FLAG"] = "failed_to_get_unleash_enabled_flag";
})(UnleashErrorCode || (UnleashErrorCode = {}));
var UnleashErrorMessage;
(function (UnleashErrorMessage) {
    UnleashErrorMessage["FAILED_TO_GET_UNLEASH_ENABLED_FLAG"] = "Failed to get unleash enabled flag";
})(UnleashErrorMessage || (UnleashErrorMessage = {}));
class FailedToGetUnleashEnabledFlagException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error) {
        super(UnleashErrorMessage.FAILED_TO_GET_UNLEASH_ENABLED_FLAG, error, {
            error_codes: [UnleashErrorCode.FAILED_TO_GET_UNLEASH_ENABLED_FLAG],
        });
    }
}
exports.FailedToGetUnleashEnabledFlagException = FailedToGetUnleashEnabledFlagException;
//# sourceMappingURL=feature-toggle.service.js.map