"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSorting = void 0;
const class_validator_1 = require("class-validator");
const utils_1 = require("../utils");
const IsSorting = (sortableFields, validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [sortableFields],
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} has invalid sorting symbol or field.`,
        },
        validator: {
            validate(value, args) {
                const orderByCondition = utils_1.sortParser.toOrderByCondition(value, '');
                if (!orderByCondition) {
                    return false;
                }
                const [sortableFields] = args.constraints;
                if (!sortableFields || sortableFields.length < 1) {
                    return true;
                }
                const requestedFields = Object.keys(orderByCondition);
                if (requestedFields.some((x) => !sortableFields.includes(x))) {
                    return false;
                }
                return true;
            },
        },
    });
};
exports.IsSorting = IsSorting;
//# sourceMappingURL=is-sorting.decorator.js.map