"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCommaSeparatedUuid = void 0;
const class_validator_1 = require("class-validator");
const IsCommaSeparatedUuid = (validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} has invalid uuid.`,
        },
        validator: {
            validate(value) {
                if (!value) {
                    return true;
                }
                const requestedValues = value.split(',');
                if (requestedValues.some((x) => !(0, class_validator_1.isUUID)(x))) {
                    return false;
                }
                return true;
            },
        },
    });
};
exports.IsCommaSeparatedUuid = IsCommaSeparatedUuid;
//# sourceMappingURL=is-comma-separated-uuid.decorator.js.map