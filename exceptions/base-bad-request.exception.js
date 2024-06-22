"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBadRequestException = void 0;
const common_1 = require("@nestjs/common");
class BaseBadRequestException extends common_1.BadRequestException {
    constructor(message, errorDetails) {
        super(message, {
            description: JSON.stringify(errorDetails),
        });
    }
}
exports.BaseBadRequestException = BaseBadRequestException;
//# sourceMappingURL=base-bad-request.exception.js.map