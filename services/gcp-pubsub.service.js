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
exports.GcpPublishMessageException = exports.GcpServiceErrorCode = exports.GcpPubSubService = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const exceptions_1 = require("../exceptions");
const _1 = require(".");
let GcpPubSubService = class GcpPubSubService {
    constructor(configService, gcpAuthService, logger) {
        this.gcpAuthService = gcpAuthService;
        this.logger = logger;
        this.useOidc = !configService.get('gcpCredentialConfig');
        if (this.useOidc) {
            const gcpConfig = configService.get('gcpConfig');
            this.pubSubClient = new pubsub_1.PubSub({
                projectId: gcpConfig.projectId,
                credentials: gcpConfig.clientLibraryConfig,
            });
            this.gcpRegion = gcpConfig.region;
        }
        else {
            const config = configService.get('gcpCredentialConfig');
            this.pubSubClient = new pubsub_1.PubSub({
                projectId: config.projectId,
                credentials: config.credentials,
            });
            this.gcpRegion = configService.get('gcpRegion');
        }
    }
    async publishMessage(topicName, data) {
        try {
            if (this.useOidc) {
                await this.gcpAuthService.refreshOIDCAccessToken();
            }
            const topic = this.pubSubClient.topic(topicName);
            const message = JSON.stringify(data);
            const dataBuffer = Buffer.from(message);
            const messageId = await topic.publishMessage({
                data: dataBuffer,
                attributes: {
                    region: this.gcpRegion,
                },
            });
            this.logger.info(`Gcp Message published.`, {
                messageId,
                topicName,
                region: this.gcpRegion,
            });
        }
        catch (error) {
            throw new GcpPublishMessageException(error, {
                error_codes: [
                    GcpServiceErrorCode.GCP_SERVICE_FAILED_TO_PUBLISH_MESSAGE,
                ],
                gcpRegion: this.gcpRegion,
                topicName: topicName,
            });
        }
    }
};
exports.GcpPubSubService = GcpPubSubService;
exports.GcpPubSubService = GcpPubSubService = __decorate([
    __param(2, (0, nestjs_pino_1.InjectPinoLogger)(GcpPubSubService.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        _1.GcpAuthService,
        nestjs_pino_1.PinoLogger])
], GcpPubSubService);
var GcpServiceErrorCode;
(function (GcpServiceErrorCode) {
    GcpServiceErrorCode["GCP_SERVICE_FAILED_TO_PUBLISH_MESSAGE"] = "gcp_service_failed_to_publish_message";
})(GcpServiceErrorCode || (exports.GcpServiceErrorCode = GcpServiceErrorCode = {}));
class GcpPublishMessageException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error, errorDetails) {
        super('Failed to publish message', error, errorDetails);
    }
}
exports.GcpPublishMessageException = GcpPublishMessageException;
//# sourceMappingURL=gcp-pubsub.service.js.map