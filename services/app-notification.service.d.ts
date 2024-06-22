import { ConfigService } from '@nestjs/config';
import { BaseInternalServerErrorException } from '../exceptions';
import { AppNotificationRequest, IBaseConfigs } from '../interfaces';
export declare class AppNotificationService {
    private readonly pusher;
    constructor(configService: ConfigService<IBaseConfigs, true>);
    notifyUser(companyId: number, userAccountId: number, request: AppNotificationRequest<SafeAny>): Promise<void>;
    private getPusherUserId;
}
export declare class FailedToSendAppNotificationException extends BaseInternalServerErrorException {
    constructor(error: Error);
}
