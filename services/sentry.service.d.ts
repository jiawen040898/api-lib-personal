import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { IBaseConfigs } from '../interfaces';
export declare const setupSentry: (configService: ConfigService<IBaseConfigs, true>) => void;
export declare const logErrorInSentry: (serviceName: string, request: Request, errorTitle: string, context: unknown, filterName: string, exception: Error | HttpException, statusCode: number, error?: unknown) => void;
