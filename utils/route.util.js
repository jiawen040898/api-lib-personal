"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeUtil = void 0;
const common_1 = require("@nestjs/common");
const buildRouteInfos = (paths, method = common_1.RequestMethod.ALL) => paths.map((path) => ({
    path,
    method,
}));
exports.routeUtil = {
    buildRouteInfos,
};
//# sourceMappingURL=route.util.js.map