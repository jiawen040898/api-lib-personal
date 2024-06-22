import { BigQuery, Query, QueryOptions } from '@google-cloud/bigquery';
import { ConfigService } from '@nestjs/config';
import { BaseInternalServerErrorException } from '../exceptions';
import { ErrorDetails, IBaseConfigs } from '../interfaces';
import { GcpAuthService } from '.';
export declare class GcpBigQueryService {
    private readonly gcpAuthService;
    private readonly bigQueryClient;
    private readonly projectId;
    private readonly regionPostfix;
    private readonly gcpRegion;
    private readonly useOidc;
    constructor(configService: ConfigService<IBaseConfigs, true>, gcpAuthService: GcpAuthService);
    replaceProjectIdAndRegionPostfix(query: string): string;
    query<T>(query: string, params: Record<string, SafeAny>, queryConfigs?: Partial<Query>, queryOptions?: QueryOptions): Promise<T[]>;
    createSession(): Promise<string>;
    abortSession(sessionId: string): Promise<void>;
    static getQueryConfigForUsingSession(sessionId: string): Partial<Query>;
    getBigQueryClient(): BigQuery;
}
export declare class GcpCreateSessionException extends BaseInternalServerErrorException {
    constructor(error: Error);
}
export declare class GcpQueryException extends BaseInternalServerErrorException {
    constructor(error: Error, errorDetails: Partial<ErrorDetails>);
}
export declare class GcpAbortSessionException extends BaseInternalServerErrorException {
    constructor(error: Error, errorDetails: Partial<ErrorDetails>);
}
