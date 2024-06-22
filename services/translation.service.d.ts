import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
export declare class TranslationService {
    private readonly translationConfig;
    constructor(configService: ConfigService<IBaseConfigs, true>, logger: PinoLogger);
    getText(key: string, defaultValue: string, locale: string, param?: {
        [key: string]: SafeAny;
    }, returnObjects?: boolean): SafeAny;
    getData(locale: string): {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
    private hasLocaleSupport;
}
