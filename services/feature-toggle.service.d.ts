import { ConfigService } from '@nestjs/config';
import { BaseInternalServerErrorException } from '../exceptions';
import { IBaseConfigs } from '../interfaces';
export declare class FeatureToggleService {
    private readonly unleashConfig;
    private static unleash;
    constructor(configService: ConfigService<IBaseConfigs, true>);
    isFeatureOn(flag: SafeAny, unleashContext: {
        [key: string]: string;
    }): Promise<boolean>;
    private initUnleash;
}
export declare class FailedToGetUnleashEnabledFlagException extends BaseInternalServerErrorException {
    constructor(error: Error);
}
