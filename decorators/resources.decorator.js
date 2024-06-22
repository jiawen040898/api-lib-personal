"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = void 0;
const common_1 = require("@nestjs/common");
const Resources = (...resources) => (0, common_1.SetMetadata)('resources', resources);
exports.Resources = Resources;
//# sourceMappingURL=resources.decorator.js.map