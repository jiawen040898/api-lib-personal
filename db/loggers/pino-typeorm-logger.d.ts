import { PinoLogger } from 'nestjs-pino';
import { Logger, QueryRunner } from 'typeorm';
import { Environment } from '../../interfaces';
export declare class PinoTypeormLogger implements Logger {
    private readonly logger;
    private readonly env;
    constructor(logger: PinoLogger, env: Environment);
    logQuery(query: string, parameters?: SafeAny[], _queryRunner?: QueryRunner): void;
    logQueryError(error: string, query: string, parameters?: SafeAny[], _queryRunner?: QueryRunner): void;
    logQuerySlow(time: number, query: string, parameters?: SafeAny[], _queryRunner?: QueryRunner): void;
    logSchemaBuild(message: string, _queryRunner?: QueryRunner): void;
    logMigration(message: string, _queryRunner?: QueryRunner): void;
    log(level: 'log' | 'info' | 'warn', message: SafeAny, _queryRunner?: QueryRunner): void;
    protected stringifyParams(parameters: SafeAny[]): SafeAny;
    private redactParameters;
}
