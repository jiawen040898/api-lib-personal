import { Cache, Milliseconds } from 'cache-manager';
import { PinoLogger } from 'nestjs-pino';
export declare class CacheService {
    private cacheManager;
    private readonly logger;
    constructor(cacheManager: Cache, logger: PinoLogger);
    get<T>(key: string): Promise<T | undefined>;
    set<T>(key: string, value: T, ttl?: Milliseconds): Promise<void>;
    del(key: string): Promise<void>;
    actionHandler<T>(action: () => Promise<T>): Promise<T | undefined>;
}
