import { RawAxiosRequestHeaders } from 'axios';
import { M2MTokenRequest } from '../interfaces';
import { CacheService } from './cache.service';
export declare class M2MTokenService {
    private cacheService;
    private readonly offsetTtl;
    constructor(cacheService: CacheService);
    getAuthorizationHeader(request: M2MTokenRequest): Promise<RawAxiosRequestHeaders>;
    getAccessToken(request: M2MTokenRequest): Promise<string>;
}
