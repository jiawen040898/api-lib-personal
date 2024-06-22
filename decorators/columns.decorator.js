"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonColumn = exports.SoftDeleteColumn = exports.ArrayColumn = exports.UuidColumn = exports.IntegerColumn = exports.DateTimeColumn = exports.DateColumn = exports.DecimalColumn = exports.Column2 = exports.getColumnType = void 0;
const typeorm_1 = require("typeorm");
const transformers_1 = require("../transformers");
const dbColumnTypesMappings = {
    postgres: {
        varchar: 'varchar',
        datetime: 'timestamp',
        ['simple-array']: 'varchar',
    },
    sqlite: {
        varchar: 'simple-array',
        timestamp: 'datetime',
        timestampz: 'datetime',
    },
};
const getColumnType = (type) => {
    if (!type) {
        return undefined;
    }
    const dbType = process.env.TS_JEST ? 'sqlite' : 'postgres';
    return dbColumnTypesMappings[dbType]?.[type] ?? type;
};
exports.getColumnType = getColumnType;
const Column2 = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: (0, exports.getColumnType)(options?.type),
    });
};
exports.Column2 = Column2;
const DecimalColumn = (options) => {
    return (0, typeorm_1.Column)({
        default: 0,
        type: 'decimal',
        precision: 10,
        scale: 7,
        transformer: new transformers_1.DecimalTransformer(),
        ...options,
    });
};
exports.DecimalColumn = DecimalColumn;
const DateColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: (0, exports.getColumnType)('date'),
    });
};
exports.DateColumn = DateColumn;
const DateTimeColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: (0, exports.getColumnType)('timestamp'),
    });
};
exports.DateTimeColumn = DateTimeColumn;
const IntegerColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: 'integer',
    });
};
exports.IntegerColumn = IntegerColumn;
const UuidColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: 'uuid',
    });
};
exports.UuidColumn = UuidColumn;
const ArrayColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: (0, exports.getColumnType)(options?.type ?? 'varchar'),
        array: true,
    });
};
exports.ArrayColumn = ArrayColumn;
const SoftDeleteColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: 'boolean',
        default: false,
    });
};
exports.SoftDeleteColumn = SoftDeleteColumn;
const JsonColumn = (options) => {
    return (0, typeorm_1.Column)({
        ...options,
        type: (0, exports.getColumnType)(options?.type ?? 'simple-json'),
    });
};
exports.JsonColumn = JsonColumn;
//# sourceMappingURL=columns.decorator.js.map