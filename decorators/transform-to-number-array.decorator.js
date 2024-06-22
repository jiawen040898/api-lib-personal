"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformToNumberArray = void 0;
const class_transformer_1 = require("class-transformer");
const TransformToNumberArray = () => {
    return (0, class_transformer_1.Transform)(({ value }) => {
        if (!value) {
            return undefined;
        }
        return value.split(',').map((v) => Number(v));
    });
};
exports.TransformToNumberArray = TransformToNumberArray;
//# sourceMappingURL=transform-to-number-array.decorator.js.map