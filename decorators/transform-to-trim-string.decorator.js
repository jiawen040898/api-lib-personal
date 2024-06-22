"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformToTrimStringArray = exports.TransformToTrimString = void 0;
const class_transformer_1 = require("class-transformer");
const TransformToTrimString = () => {
    return (0, class_transformer_1.Transform)(({ value }) => value?.trim());
};
exports.TransformToTrimString = TransformToTrimString;
const TransformToTrimStringArray = () => {
    return (0, class_transformer_1.Transform)(({ value }) => value.map((item) => item?.trim()));
};
exports.TransformToTrimStringArray = TransformToTrimStringArray;
//# sourceMappingURL=transform-to-trim-string.decorator.js.map