import { RawAxiosRequestHeaders } from 'axios';
export declare class AxiosHeaderBuilder {
    private headers;
    constructor(contentType?: string);
    addHeader(header: {
        [key: string]: string;
    }): this;
    addAcceptEncoding(value: string): this;
    addAcceptGzipEncoding(): this;
    addAuthorization(value: string): this;
    addBearerAuthorizationToken(token: string): this;
    build(): RawAxiosRequestHeaders;
}
