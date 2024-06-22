"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanTransformer = void 0;
class BooleanTransformer {
    to(value) {
        if (value === null) {
            return null;
        }
        return value ? 1 : 0;
    }
    from(value) {
        if (value === null) {
            return null;
        }
        return Boolean(value);
    }
}
exports.BooleanTransformer = BooleanTransformer;
//# sourceMappingURL=boolean.transformer.js.map