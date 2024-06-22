import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare abstract class BaseGuard {
    protected reflector: Reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    private hasRequiredRoles;
    private hasRequiredScopes;
}
