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
exports.EmailService = void 0;
const client_sqs_1 = require("@aws-sdk/client-sqs");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const constants_1 = require("../constants");
let EmailService = class EmailService {
    constructor(configService, logger) {
        this.configService = configService;
        this.logger = logger;
        this.sqsConfig = this.configService.get('email', constants_1.configOpts);
        this.sqsClient = new client_sqs_1.SQSClient({
            region: this.sqsConfig.region,
        });
    }
    async send(request) {
        const input = {
            QueueUrl: this.sqsConfig.queue,
            MessageBody: JSON.stringify(request),
        };
        const command = new client_sqs_1.SendMessageCommand(input);
        try {
            await this.sqsClient.send(command);
        }
        catch (err) {
            this.logger.error('Fail to send message to queue.', { err });
            throw err;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, nestjs_pino_1.InjectPinoLogger)(EmailService.name)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        nestjs_pino_1.PinoLogger])
], EmailService);
//# sourceMappingURL=email.service.js.map