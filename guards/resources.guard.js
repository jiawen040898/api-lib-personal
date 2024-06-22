"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const enums_1 = require("../enums");
let ResourcesGuard = class ResourcesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const resources = this.reflector.get('resources', context.getHandler());
        if (!resources) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const resource = request.user;
        return this.hasRequiredResources(resources, resource.resource_type);
    }
    hasRequiredResources(requiredResources, resourceType) {
        const hasRequiredResource = requiredResources.some((requiredResource) => resourceType === requiredResource);
        if (hasRequiredResource) {
            return true;
        }
        throw new common_1.UnauthorizedException(enums_1.AuthErrorMessage.RESOURCE_NO_ACCESS);
    }
};
exports.ResourcesGuard = ResourcesGuard;
exports.ResourcesGuard = ResourcesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ResourcesGuard);
//# sourceMappingURL=resources.guard.js.map