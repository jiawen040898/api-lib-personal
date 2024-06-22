import { AxiosRequestConfig } from 'axios';
import { IAuth0Config } from '../interfaces';
import { M2MTokenService } from './m2m-token.service';
export declare abstract class PulsifiApiBaseService {
    protected readonly m2mTokenService: M2MTokenService;
    protected auth0Config: IAuth0Config;
    protected abstract readonly baseUrl: string;
    constructor(m2mTokenService: M2MTokenService, auth0Config: IAuth0Config);
    protected getConfig(): Promise<AxiosRequestConfig>;
}
