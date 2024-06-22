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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedToSendAppNotificationException = exports.AppNotificationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const pusher_1 = __importDefault(require("pusher"));
const exceptions_1 = require("../exceptions");
const interfaces_1 = require("../interfaces");
let AppNotificationService = class AppNotificationService {
    constructor(configService) {
        const pusherConfig = configService.get('appNotification');
        this.pusher = new pusher_1.default({
            appId: pusherConfig.appId,
            key: pusherConfig.key,
            secret: pusherConfig.secret,
            cluster: pusherConfig.cluster,
            useTLS: true,
        });
    }
    async notifyUser(companyId, userAccountId, request) {
        try {
            await this.pusher.sendToUser(this.getPusherUserId(companyId, userAccountId), request.event_type, request.event_data);
        }
        catch (error) {
            throw new FailedToSendAppNotificationException(error);
        }
    }
    getPusherUserId(companyId, userAccountId) {
        return `${companyId}-${userAccountId}`;
    }
};
exports.AppNotificationService = AppNotificationService;
exports.AppNotificationService = AppNotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppNotificationService);
class FailedToSendAppNotificationException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error) {
        super(interfaces_1.AppNotificationErrorMessage.FAILED_TO_SEND, error, {
            error_codes: [interfaces_1.AppNotificationErrorCode.FAILED_TO_SEND_REQUEST],
        });
    }
}
exports.FailedToSendAppNotificationException = FailedToSendAppNotificationException;
//# sourceMappingURL=app-notification.service.js.map