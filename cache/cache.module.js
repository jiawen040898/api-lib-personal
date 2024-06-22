"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheModule = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const config_1 = require("@nestjs/config");
const cache_manager_redis_yet_1 = require("cache-manager-redis-yet");
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const inMemoryCacheStore = (configService) => {
    const cacheTtl = configService.get('cacheTtl', constants_1.configOpts);
    return {
        store: 'memory',
        ttl: cacheTtl,
    };
};
const redisCacheStore = (configService) => {
    const cacheTtl = configService.get('cacheTtl', constants_1.configOpts);
    const redisConfig = configService.get('redis', constants_1.configOpts);
    return {
        store: cache_manager_redis_yet_1.redisStore,
        ...redisConfig,
        ttl: cacheTtl,
    };
};
exports.cacheModule = cache_manager_1.CacheModule.registerAsync({
    imports: [config_1.ConfigModule],
    useFactory: async (configService) => {
        const env = configService.get('env', constants_1.configOpts);
        return utils_1.environmentUtil.isDevelopment(env)
            ? inMemoryCacheStore(configService)
            : redisCacheStore(configService);
    },
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=cache.module.js.map