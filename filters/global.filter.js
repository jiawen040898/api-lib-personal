"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalFilters = void 0;
const _1 = require(".");
const entity_not_found_exception_filter_1 = require("./entity-not-found-exception.filter");
const globalFilters = (app, logger, configService) => [
    new _1.ExceptionsFilter(app, logger, configService),
    new _1.HttpExceptionFilter(logger, configService),
    new entity_not_found_exception_filter_1.EntityNotFoundExceptionFilter(),
];
exports.globalFilters = globalFilters;
//# sourceMappingURL=global.filter.js.map