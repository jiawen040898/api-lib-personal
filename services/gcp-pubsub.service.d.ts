import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { BaseInternalServerErrorException } from '../exceptions';
import { ErrorDetails, IBaseConfigs, IEventModel } from '../interfaces';
import { GcpAuthService } from '.';
export declare class GcpPubSubService {
    private readonly gcpAuthService;
    private readonly logger;
    private readonly pubSubClient;
    private readonly gcpRegion;
    private readonly useOidc;
    constructor(configService: ConfigService<IBaseConfigs, true>, gcpAuthService: GcpAuthService, logger: PinoLogger);
    publishMessage(topicName: string, data: IEventModel<SafeAny>): Promise<void>;
}
export declare enum GcpServiceErrorCode {
    GCP_SERVICE_FAILED_TO_PUBLISH_MESSAGE = "gcp_service_failed_to_publish_message"
}
export declare class GcpPublishMessageException extends BaseInternalServerErrorException {
    constructor(error: Error, errorDetails: ErrorDetails);
}
