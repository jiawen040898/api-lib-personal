import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { IBaseConfigs } from '../interfaces';
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    private readonly serviceName;
    constructor(logger: Logger, configService: ConfigService<IBaseConfigs, true>);
    catch(exception: HttpException, host: ArgumentsHost): void;
}
