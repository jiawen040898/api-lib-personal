"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatorUtil = void 0;
const generate_password_1 = require("generate-password");
const lodash_1 = require("lodash");
const uuid_1 = require("uuid");
exports.generatorUtil = {
    uuid: () => {
        return (0, uuid_1.v4)();
    },
    password: (length) => {
        return (0, generate_password_1.generate)({
            length,
            numbers: true,
            symbols: true,
            lowercase: true,
            uppercase: true,
            excludeSimilarCharacters: true,
            strict: true,
        });
    },
    cacheKey: (cacheKey, ...params) => {
        const formattedParams = params
            .filter((i) => !(0, lodash_1.isEmpty)(i) || (0, lodash_1.isInteger)(i))
            .join(':');
        return `${cacheKey}:${formattedParams}`;
    },
    alphaNumericCode: (length) => {
        return (0, generate_password_1.generate)({
            length,
            numbers: true,
        });
    },
};
//# sourceMappingURL=generator.util.js.map