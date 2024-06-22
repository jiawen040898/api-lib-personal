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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const i18next_1 = __importDefault(require("i18next"));
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const nestjs_pino_1 = require("nestjs-pino");
const constants_1 = require("../constants");
let TranslationService = class TranslationService {
    constructor(configService, logger) {
        this.translationConfig = configService.get('translation', constants_1.configOpts);
        i18next_1.default.use(i18next_http_backend_1.default).init(this.translationConfig, (error) => {
            if (error) {
                logger.error({ error }, 'Failed to initialize translation service');
            }
        });
    }
    getText(key, defaultValue, locale, param = {}, returnObjects = false) {
        const langData = i18next_1.default.t(key, {
            lng: locale,
            returnObjects,
            ...param,
        });
        if (!langData) {
            return defaultValue;
        }
        return langData;
    }
    getData(locale) {
        return this.hasLocaleSupport(locale)
            ? i18next_1.default.getDataByLanguage(locale)
            : i18next_1.default.getDataByLanguage(this.translationConfig.fallbackLng);
    }
    hasLocaleSupport(locale) {
        return i18next_1.default.hasResourceBundle(locale, this.translationConfig.ns);
    }
};
exports.TranslationService = TranslationService;
exports.TranslationService = TranslationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        nestjs_pino_1.PinoLogger])
], TranslationService);
//# sourceMappingURL=translation.service.js.map