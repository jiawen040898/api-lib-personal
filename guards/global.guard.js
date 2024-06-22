"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalGuards = void 0;
const core_1 = require("@nestjs/core");
const resources_guard_1 = require("./resources.guard");
const roles_guard_1 = require("./roles.guard");
const scopes_guard_1 = require("./scopes.guard");
const globalGuards = (app) => [
    new roles_guard_1.RolesGuard(app.get(core_1.Reflector)),
    new scopes_guard_1.ScopesGuard(app.get(core_1.Reflector)),
    new resources_guard_1.ResourcesGuard(app.get(core_1.Reflector)),
];
exports.globalGuards = globalGuards;
//# sourceMappingURL=global.guard.js.map