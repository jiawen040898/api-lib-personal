"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateOnlyString = void 0;
const class_validator_1 = require("class-validator");
const IsDateOnlyString = (validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        options: {
            ...validationOptions,
            message: validationOptions?.message ??
                `Date format must be YYYY-MM-DD`,
        },
        validator: {
            validate(value) {
                if (value.length != 10) {
                    return false;
                }
                return (0, class_validator_1.isDateString)(value);
            },
        },
    });
};
exports.IsDateOnlyString = IsDateOnlyString;
//# sourceMappingURL=is-date-only-string.decorator.js.map