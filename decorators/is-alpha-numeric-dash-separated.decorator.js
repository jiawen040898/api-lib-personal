"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAlphaNumericDashSeparated = void 0;
const class_validator_1 = require("class-validator");
const IsAlphaNumericDashSeparated = (validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} has one or more invalid characters.`,
        },
        validator: {
            validate(value) {
                if (!value) {
                    return false;
                }
                const validator = new RegExp(/^[a-z0-9-]+$/gi);
                return validator.test(value);
            },
        },
    });
};
exports.IsAlphaNumericDashSeparated = IsAlphaNumericDashSeparated;
//# sourceMappingURL=is-alpha-numeric-dash-separated.decorator.js.map