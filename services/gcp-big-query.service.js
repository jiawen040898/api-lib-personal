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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpAbortSessionException = exports.GcpQueryException = exports.GcpCreateSessionException = exports.GcpBigQueryService = void 0;
const bigquery_1 = require("@google-cloud/bigquery");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const gcp_bq_table_postfix_enum_1 = require("../enums/gcp-bq-table-postfix.enum");
const exceptions_1 = require("../exceptions");
const _1 = require(".");
let GcpBigQueryService = class GcpBigQueryService {
    constructor(configService, gcpAuthService) {
        this.gcpAuthService = gcpAuthService;
        this.useOidc = !configService.get('gcpCredentialConfig');
        if (this.useOidc) {
            const gcpConfig = configService.get('gcpConfig');
            this.projectId = gcpConfig.projectId;
            this.bigQueryClient = new bigquery_1.BigQuery({
                credentials: gcpConfig.clientLibraryConfig,
                projectId: this.projectId,
            });
            this.gcpRegion = gcpConfig.region;
            this.regionPostfix =
                gcp_bq_table_postfix_enum_1.MapGcpRegionToBqTablePostfix[gcpConfig.region];
        }
        else {
            const gcpCredentialConfig = configService.get('gcpCredentialConfig');
            const credentials = {
                client_email: gcpCredentialConfig.credentials.client_email,
                private_key: gcpCredentialConfig.credentials.private_key,
                project_id: gcpCredentialConfig.projectId,
            };
            this.bigQueryClient = new bigquery_1.BigQuery({
                credentials,
            });
            const gcpRegion = configService.get('gcpRegion');
            this.regionPostfix = gcp_bq_table_postfix_enum_1.MapGcpRegionToBqTablePostfix[gcpRegion];
            this.gcpRegion = gcpRegion;
            this.projectId = gcpCredentialConfig.projectId;
        }
    }
    replaceProjectIdAndRegionPostfix(query) {
        return query
            .replace(/{{project_id}}/g, this.projectId)
            .replace(/{{region_postfix}}/g, this.regionPostfix);
    }
    async query(query, params, queryConfigs = {}, queryOptions = {}) {
        try {
            if (this.useOidc) {
                await this.gcpAuthService.refreshOIDCAccessToken();
            }
            const response = await this.bigQueryClient.query({
                query: this.replaceProjectIdAndRegionPostfix(query),
                params,
                ...queryConfigs,
            }, queryOptions);
            return response.at(0);
        }
        catch (error) {
            throw new GcpQueryException(error, {
                query: this.replaceProjectIdAndRegionPostfix(query),
                params,
            });
        }
    }
    async createSession() {
        try {
            const queryJobOutput = await this.bigQueryClient.createQueryJob({
                query: `BEGIN TRANSACTION;`,
                createSession: true,
                location: this.gcpRegion,
            });
            await queryJobOutput[0].getQueryResults();
            return queryJobOutput[1].statistics?.sessionInfo
                ?.sessionId;
        }
        catch (error) {
            throw new GcpCreateSessionException(error);
        }
    }
    async abortSession(sessionId) {
        try {
            await this.bigQueryClient.query({
                query: `CALL BQ.ABORT_SESSION(@session_id)`,
                params: {
                    session_id: sessionId,
                },
                connectionProperties: [
                    {
                        key: 'session_id',
                        value: sessionId,
                    },
                ],
            });
        }
        catch (error) {
            throw new GcpAbortSessionException(error, {
                session_id: sessionId,
            });
        }
    }
    static getQueryConfigForUsingSession(sessionId) {
        return {
            connectionProperties: [
                {
                    key: 'session_id',
                    value: sessionId,
                },
            ],
        };
    }
    getBigQueryClient() {
        return this.bigQueryClient;
    }
};
exports.GcpBigQueryService = GcpBigQueryService;
exports.GcpBigQueryService = GcpBigQueryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        _1.GcpAuthService])
], GcpBigQueryService);
var GcpBigQueryErrorCode;
(function (GcpBigQueryErrorCode) {
    GcpBigQueryErrorCode["GCP_SERVICE_FAILED_TO_CREATE_SESSION"] = "gcp_service_failed_to_create_session";
    GcpBigQueryErrorCode["GCP_SERVICE_FAILED_TO_QUERY"] = "gcp_service_failed_to_query";
    GcpBigQueryErrorCode["GCP_SERVICE_FAILED_TO_ABORT_SESSION"] = "gcp_service_failed_to_abort_session";
})(GcpBigQueryErrorCode || (GcpBigQueryErrorCode = {}));
class GcpCreateSessionException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error) {
        super('Failed to create bq session', error, {
            error_codes: [
                GcpBigQueryErrorCode.GCP_SERVICE_FAILED_TO_CREATE_SESSION,
            ],
        });
    }
}
exports.GcpCreateSessionException = GcpCreateSessionException;
class GcpQueryException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error, errorDetails) {
        super(`Failed to query from bq`, error, {
            error_codes: [GcpBigQueryErrorCode.GCP_SERVICE_FAILED_TO_QUERY],
            ...errorDetails,
        });
    }
}
exports.GcpQueryException = GcpQueryException;
class GcpAbortSessionException extends exceptions_1.BaseInternalServerErrorException {
    constructor(error, errorDetails) {
        super('Failed to abort bq session', error, {
            error_codes: [
                GcpBigQueryErrorCode.GCP_SERVICE_FAILED_TO_ABORT_SESSION,
            ],
            ...errorDetails,
        });
    }
}
exports.GcpAbortSessionException = GcpAbortSessionException;
//# sourceMappingURL=gcp-big-query.service.js.map