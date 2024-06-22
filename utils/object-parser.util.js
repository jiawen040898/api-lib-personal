"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectParser = void 0;
const lodash_1 = require("lodash");
exports.objectParser = {
    toJSON: (value) => value ? JSON.parse(JSON.stringify(value)) : null,
    toDto: (value, type) => (value ? new type(value) : null),
    toDtos: (value, type) => {
        if (!value || (0, lodash_1.isEmpty)(value)) {
            return [];
        }
        return value.map((x) => {
            return new type(x);
        });
    },
    parseJsonArrayToDtos: (rawJson, type) => {
        const result = rawJson;
        if ((0, lodash_1.isEmpty)(result)) {
            return [];
        }
        const dtos = result.map((x) => {
            return new type(x);
        });
        return dtos;
    },
    tryParseTo: (jsonString) => {
        if (!jsonString) {
            return undefined;
        }
        try {
            return JSON.parse(jsonString);
        }
        catch {
            return undefined;
        }
    },
};
//# sourceMappingURL=object-parser.util.js.map