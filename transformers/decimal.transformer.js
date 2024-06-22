"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalTransformer = void 0;
class DecimalTransformer {
    to(value) {
        return value;
    }
    from(value) {
        return value === null ? null : parseFloat(value);
    }
}
exports.DecimalTransformer = DecimalTransformer;
//# sourceMappingURL=decimal.transformer.js.map