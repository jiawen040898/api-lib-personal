import { SNSClient } from '@aws-sdk/client-sns';
import { PinoLogger } from 'nestjs-pino';
import { IEventModel, ISNSConfig } from '../interfaces';
export declare abstract class SNSBaseService {
    protected snsConfig: ISNSConfig;
    protected readonly logger: PinoLogger;
    protected snsClient: SNSClient;
    constructor(snsConfig: ISNSConfig, logger: PinoLogger);
    sendMessage<T>(model: IEventModel<T>, excludeMessageGroupId?: boolean): Promise<void>;
    sendBatchMessage<T>(models: IEventModel<T>[], messageDepulicationId: string, excludeMessageGroupId?: boolean): Promise<void>;
    private buildMessageAttributes;
}
