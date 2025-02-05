"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scopes = void 0;
const common_1 = require("@nestjs/common");
const Scopes = (...scopes) => (0, common_1.SetMetadata)('scopes', scopes);
exports.Scopes = Scopes;
//# sourceMappingURL=scopes.decorator.js.map