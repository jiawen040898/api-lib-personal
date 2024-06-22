"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGuard = void 0;
class BaseGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        const scopes = this.reflector.get('scopes', context.getHandler());
        if (!roles && !scopes) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const hasRequiredRoles = this.hasRequiredRoles(roles, user.roles);
        const hasRequiredScopes = this.hasRequiredScopes(scopes, user.scopes);
        return hasRequiredRoles || hasRequiredScopes;
    }
    hasRequiredRoles(requiredRoles, userRoles) {
        return (requiredRoles &&
            !!userRoles?.some((userRole) => requiredRoles.includes(userRole.toLowerCase())));
    }
    hasRequiredScopes(requiredScopes, userScopes) {
        return (requiredScopes &&
            !!requiredScopes.every((requiredScope) => userScopes?.includes(requiredScope)));
    }
}
exports.BaseGuard = BaseGuard;
//# sourceMappingURL=base.guard.js.map