"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsType = void 0;
const class_validator_1 = require("class-validator");
const IsType = (types, validationOptions) => {
    return (0, class_validator_1.ValidateBy)({
        name: 'isType',
        validator: {
            validate: (value) => types.includes(typeof value),
            defaultMessage: ({ value, property }) => `${property} should not be ${typeof value} type, it must be one of these - [${types.join(', ')}]`,
        },
    }, validationOptions);
};
exports.IsType = IsType;
//# sourceMappingURL=is-type.decorator.js.map