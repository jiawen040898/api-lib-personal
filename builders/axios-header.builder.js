"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHeaderBuilder = void 0;
class AxiosHeaderBuilder {
    constructor(contentType = 'application/json') {
        this.headers = {
            'Content-Type': contentType,
        };
    }
    addHeader(header) {
        this.headers = {
            ...this.headers,
            ...header,
        };
        return this;
    }
    addAcceptEncoding(value) {
        return this.addHeader({
            'Accept-Encoding': value,
        });
    }
    addAcceptGzipEncoding() {
        this.addAcceptEncoding('gzip,deflate,compress');
        return this;
    }
    addAuthorization(value) {
        return this.addHeader({
            Authorization: value,
        });
    }
    addBearerAuthorizationToken(token) {
        return this.addAuthorization(`Bearer ${token}`);
    }
    build() {
        return this.headers;
    }
}
exports.AxiosHeaderBuilder = AxiosHeaderBuilder;
//# sourceMappingURL=axios-header.builder.js.map