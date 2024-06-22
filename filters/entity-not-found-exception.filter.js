"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const EntityNotFoundError_1 = require("typeorm/error/EntityNotFoundError");
const enums_1 = require("../enums");
const interfaces_1 = require("../interfaces");
let EntityNotFoundExceptionFilter = class EntityNotFoundExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const payload = new interfaces_1.APIResponse({
            data: null,
            meta: {
                type: enums_1.ErrorMessage.DEFAULT,
                message: this.buildErrorMessage(exception.message),
            },
        });
        response.status(common_1.HttpStatus.NOT_FOUND).json(payload);
    }
    buildErrorMessage(errMsg) {
        let entityName = 'resources';
        if (errMsg.startsWith(`Could not find any entity of type "`)) {
            const matches = errMsg.match(/\"(.*?)\"/);
            if (matches) {
                entityName = matches[0].split('"').join('');
            }
        }
        return `Unable to find requested ${entityName}`;
    }
};
exports.EntityNotFoundExceptionFilter = EntityNotFoundExceptionFilter;
exports.EntityNotFoundExceptionFilter = EntityNotFoundExceptionFilter = __decorate([
    (0, common_1.Catch)(EntityNotFoundError_1.EntityNotFoundError)
], EntityNotFoundExceptionFilter);
//# sourceMappingURL=entity-not-found-exception.filter.js.map