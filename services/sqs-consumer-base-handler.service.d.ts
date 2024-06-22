import { Message } from '@aws-sdk/client-sqs';
import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
export declare abstract class SqsConsumerBaseHandler {
    protected readonly logger: PinoLogger;
    protected readonly serviceName: string;
    constructor(logger: PinoLogger, configService: ConfigService<IBaseConfigs, true>);
    protected logError(error: Error, sqsName: string, message?: Message): void;
}
