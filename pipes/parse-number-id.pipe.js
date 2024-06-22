"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseNumberIdPipe = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../enums");
let ParseNumberIdPipe = class ParseNumberIdPipe {
    transform(value, metadata) {
        if (value > 0 && value % 1 === 0 && metadata.type == 'param') {
            return value;
        }
        throw new common_1.BadRequestException(enums_1.ErrorMessage.INVALID);
    }
};
exports.ParseNumberIdPipe = ParseNumberIdPipe;
exports.ParseNumberIdPipe = ParseNumberIdPipe = __decorate([
    (0, common_1.Injectable)()
], ParseNumberIdPipe);
//# sourceMappingURL=parse-number-id.pipe.js.map