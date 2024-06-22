"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCommaSeparatedEnum = void 0;
const class_validator_1 = require("class-validator");
const IsCommaSeparatedEnum = (enumType, validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [enumType],
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} has invalid enum values.`,
        },
        validator: {
            validate(value, args) {
                if (!value) {
                    return false;
                }
                const [enumType] = args.constraints;
                const allowableValues = Object.values(enumType);
                const requestedValues = value.split(',');
                if (requestedValues.some((x) => !allowableValues.includes(x))) {
                    return false;
                }
                return true;
            },
        },
    });
};
exports.IsCommaSeparatedEnum = IsCommaSeparatedEnum;
//# sourceMappingURL=is-comma-separated-enum.decorator.js.map