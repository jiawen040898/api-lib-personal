"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateBefore = void 0;
const class_validator_1 = require("class-validator");
const IsDateBefore = (comparePropertyName, validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [comparePropertyName],
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} must be before ${comparePropertyName}`,
        },
        validator: {
            validate(value, args) {
                const endDate = args.object[args.constraints[0]];
                if (!endDate) {
                    return true;
                }
                return new Date(value) <= new Date(endDate);
            },
        },
    });
};
exports.IsDateBefore = IsDateBefore;
//# sourceMappingURL=is-date-before.decorator.js.map