"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFailedException = exports.BaseValidator = void 0;
const exceptions_1 = require("../exceptions");
class BaseValidator {
    constructor(errors, errorMessage = 'Bad Request') {
        this.errors = errors;
        this.errorMessage = errorMessage;
    }
    get hasError() {
        return this.errors.error_codes
            ? !!this.errors.error_codes.length
            : !!Object.keys(this.errors).length;
    }
    getErrors() {
        return this.errors;
    }
    throwExceptionIfAnyError() {
        if (this.hasError) {
            throw new ValidationFailedException(this.errorMessage, this.errors);
        }
    }
}
exports.BaseValidator = BaseValidator;
class ValidationFailedException extends exceptions_1.BaseBadRequestException {
}
exports.ValidationFailedException = ValidationFailedException;
//# sourceMappingURL=base.validator.js.map