import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
import { SNSBaseService } from './sns-base.service';
export declare class PublisherService extends SNSBaseService {
    protected readonly logger: PinoLogger;
    constructor(logger: PinoLogger, configService: ConfigService<IBaseConfigs, true>);
}
