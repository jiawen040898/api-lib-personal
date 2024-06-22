import { ExceptionFilter, INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
export declare const globalFilters: (app: INestApplication, logger: Logger, configService: ConfigService<IBaseConfigs, true>) => ExceptionFilter[];
