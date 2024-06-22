"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCommaSeparatedDomain = void 0;
const class_validator_1 = require("class-validator");
const IsCommaSeparatedDomain = (validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} has one or more invalid domains.`,
        },
        validator: {
            validate(value) {
                if (!value) {
                    return true;
                }
                const domains = value.split(',');
                return domains.every((domain) => (0, class_validator_1.isFQDN)(domain, { allow_underscores: true }));
            },
        },
    });
};
exports.IsCommaSeparatedDomain = IsCommaSeparatedDomain;
//# sourceMappingURL=is-comma-separated-domain.decorator.js.map