import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { IBaseConfigs } from '../interfaces';
export declare class GcpAuthService {
    private readonly httpService;
    private readonly isDevelopment;
    constructor(httpService: HttpService, configService: ConfigService<IBaseConfigs, true>);
    refreshOIDCAccessToken(): Promise<void>;
}
