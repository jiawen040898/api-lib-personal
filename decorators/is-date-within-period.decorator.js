"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateWithinPeriod = void 0;
const class_validator_1 = require("class-validator");
const utils_1 = require("../utils");
const IsDateWithinPeriod = (startingDaysFromNow = 0, endingDaysFromNow = 366, validationOptions) => (object, propertyName) => {
    (0, class_validator_1.registerDecorator)({
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: {
            ...validationOptions,
            message: validationOptions?.message ||
                `${propertyName} must be within proper date range`,
        },
        validator: {
            validate(value) {
                const startDate = utils_1.dateTimeUtil.addDays(startingDaysFromNow);
                const endDate = utils_1.dateTimeUtil.addDays(endingDaysFromNow);
                return (new Date(startDate) < new Date(value) &&
                    new Date(value) <= new Date(endDate));
            },
        },
    });
};
exports.IsDateWithinPeriod = IsDateWithinPeriod;
//# sourceMappingURL=is-date-within-period.decorator.js.map