import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { JwtProviders } from '@pulsifi/auth';
import { CredentialBody, ExternalAccountClientOptions } from 'google-auth-library';
import { InitOptions } from 'i18next';
import { HttpBackendOptions } from 'i18next-http-backend';
import { LevelWithSilent } from 'pino';
import { RedisClientOptions } from 'redis';
export type Environment = 'development' | 'sandbox' | 'staging' | 'production';
export interface IApiInfo {
    buildName: string;
    buildVersion: string;
    buildTag: string;
    title: string;
    description: string;
    prefixPath: string;
    prefixVersion: string;
    port: string | number;
}
export interface IAuth0Config {
    audience: string;
    clientId?: string;
    clientSecret?: string;
    domain: string;
    iss: string;
}
export interface ISQSConfig {
    apiVersion: string;
    region: string;
    queue: string;
}
export interface ISNSConfig {
    apiVersion: string;
    region: string;
    topic: string;
}
export interface IS3Config {
    apiVersion: string;
    bucketName: string;
    region: string;
    pulsifiDomain?: string;
}
export interface ILogging {
    excludeRoutes: string[];
    level: LevelWithSilent;
    shouldLogHttpReq: boolean;
}
export interface IGcpConfig {
    clientLibraryConfig: CredentialBody | ExternalAccountClientOptions;
    projectId: string;
    region: string;
}
export interface ITranslationHttpBackendConfig extends HttpBackendOptions {
    loadPath: string;
    crossDomain: boolean;
    reloadInterval: number;
}
export interface ITranslationConfig extends InitOptions<HttpBackendOptions> {
    debug: boolean;
    initImmediate: boolean;
    load: 'currentOnly';
    fallbackLng: string;
    preload: string[];
    ns: string;
    defaultNS: string;
    backend: ITranslationHttpBackendConfig;
    parseMissingKeyHandler: () => SafeAny;
}
export interface GcpCredentialConfig {
    projectId: string;
    credentials: {
        client_email: string;
        private_key: string;
    };
}
export interface UnleashConfig {
    apiKey: string;
    apiUrl: string;
    projectId: string;
    environment: string;
}
export interface AppNotificationConfig {
    appId: string;
    key: string;
    secret: string;
    cluster: string;
    useTLS: boolean;
}
export interface IBaseConfigs {
    env: Environment;
    awsRegion: string;
    apiInfo: IApiInfo;
    database: TypeOrmModuleOptions;
    sentryDsn: string;
    redis: RedisClientOptions;
    cacheTtl: number;
    apiGatewayUrl: string;
    jwtProviders: JwtProviders;
    email?: ISQSConfig;
    albUrl?: string;
    sns: ISNSConfig;
    logging: ILogging;
    gcpConfig?: IGcpConfig;
    translation: ITranslationConfig;
    unleash?: UnleashConfig;
    gcpCredentialConfig?: GcpCredentialConfig;
    gcpRegion?: string;
    appNotification?: AppNotificationConfig;
}
