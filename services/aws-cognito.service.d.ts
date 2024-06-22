import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AwsCognitoUserInfo } from '@pulsifi/auth';
import { PinoLogger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
import { CacheService } from './cache.service';
export declare class AwsCognitoService {
    private httpService;
    private readonly configService;
    private readonly cacheService;
    private readonly logger;
    private readonly baseUrl;
    private readonly issuerUri;
    constructor(httpService: HttpService, configService: ConfigService<IBaseConfigs, true>, cacheService: CacheService, logger: PinoLogger);
    getUserInfo(tokenSub: string | undefined, authorizationHeader: string | undefined, scope: string | undefined): Promise<AwsCognitoUserInfo>;
    private getOAuth2UserInfo;
    private getIdpServiceUserInfo;
    private buildAwsCognitoUserInfo;
}
