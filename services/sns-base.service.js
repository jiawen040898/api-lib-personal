"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SNSBaseService = void 0;
const client_sns_1 = require("@aws-sdk/client-sns");
const utils_1 = require("../utils");
class SNSBaseService {
    constructor(snsConfig, logger) {
        this.snsConfig = snsConfig;
        this.logger = logger;
        this.snsClient = new client_sns_1.SNSClient({
            region: snsConfig.region,
            apiVersion: snsConfig.apiVersion,
        });
    }
    async sendMessage(model, excludeMessageGroupId = false) {
        const command = new client_sns_1.PublishCommand({
            TopicArn: this.snsConfig.topic,
            MessageGroupId: excludeMessageGroupId ? undefined : model.event_id,
            Message: JSON.stringify({
                ...model,
                timestamp: utils_1.dateTimeUtil.now(),
            }),
            MessageAttributes: this.buildMessageAttributes(model),
        });
        try {
            await this.snsClient.send(command);
        }
        catch (error) {
            this.logger.error('Fail to publish message', {
                error,
            });
            throw error;
        }
    }
    async sendBatchMessage(models, messageDepulicationId, excludeMessageGroupId = false) {
        const entries = models.map((model) => {
            return {
                Id: utils_1.generatorUtil.uuid(),
                Message: JSON.stringify({
                    ...model,
                    timestamp: utils_1.dateTimeUtil.now(),
                }),
                MessageGroupId: excludeMessageGroupId
                    ? undefined
                    : model.event_id,
                MessageDepulicationId: messageDepulicationId,
                MessageAttributes: this.buildMessageAttributes(model),
            };
        });
        const command = new client_sns_1.PublishBatchCommand({
            TopicArn: this.snsConfig.topic,
            PublishBatchRequestEntries: entries,
        });
        try {
            await this.snsClient.send(command);
        }
        catch (error) {
            this.logger.error('Fail to send batch message', {
                error,
            });
            throw error;
        }
    }
    buildMessageAttributes(model) {
        return {
            company_id: {
                DataType: 'Number',
                StringValue: model.company_id.toString(),
            },
            user_account_id: {
                DataType: 'Number',
                StringValue: model.user_account_id.toString(),
            },
            event_type: {
                DataType: 'String',
                StringValue: model.event_type,
            },
        };
    }
}
exports.SNSBaseService = SNSBaseService;
//# sourceMappingURL=sns-base.service.js.map