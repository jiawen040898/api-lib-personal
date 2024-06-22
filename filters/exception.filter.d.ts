import { ArgumentsHost, INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
export declare class ExceptionsFilter extends BaseExceptionFilter {
    private readonly logger;
    private readonly serviceName;
    constructor(app: INestApplication, logger: Logger, configService: ConfigService<IBaseConfigs, true>);
    catch(exception: SafeAny, host: ArgumentsHost): void;
}
