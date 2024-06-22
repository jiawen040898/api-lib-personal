import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { EmailRequest, IBaseConfigs } from '../interfaces';
export declare class EmailService {
    private readonly configService;
    private readonly logger;
    private readonly sqsClient;
    private readonly sqsConfig;
    constructor(configService: ConfigService<IBaseConfigs, true>, logger: PinoLogger);
    send(request: EmailRequest): Promise<void>;
}
