import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { IBaseConfigs } from '../../interfaces';
export declare const typeOrmModuleFactory: (configService: ConfigService<IBaseConfigs, true>, logger: PinoLogger) => Promise<TypeOrmModuleOptions>;
