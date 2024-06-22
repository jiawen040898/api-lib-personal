"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
let CacheService = class CacheService {
    constructor(cacheManager, logger) {
        this.cacheManager = cacheManager;
        this.logger = logger;
    }
    async get(key) {
        return this.actionHandler(() => this.cacheManager.get(key));
    }
    async set(key, value, ttl) {
        if (ttl != undefined) {
            this.actionHandler(() => this.cacheManager.set(key, value, ttl));
            return;
        }
        this.actionHandler(() => this.cacheManager.set(key, value));
    }
    async del(key) {
        return this.actionHandler(() => this.cacheManager.del(key));
    }
    async actionHandler(action) {
        try {
            return await action();
        }
        catch (error) {
            this.logger.error({ error }, 'Failed to connect cache store');
            return undefined;
        }
    }
};
exports.CacheService = CacheService;
exports.CacheService = CacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __param(1, (0, nestjs_pino_1.InjectPinoLogger)(CacheService.name)),
    __metadata("design:paramtypes", [Object, nestjs_pino_1.PinoLogger])
], CacheService);
//# sourceMappingURL=cache.service.js.map