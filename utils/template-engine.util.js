"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateEngine = void 0;
const liquidjs_1 = require("liquidjs");
exports.templateEngine = {
    parseAndRender: (htmlContent, variables) => {
        const engine = new liquidjs_1.Liquid();
        const finalVariables = {
            ...variables,
        };
        return engine.parseAndRenderSync(htmlContent, finalVariables);
    },
};
//# sourceMappingURL=template-engine.util.js.map