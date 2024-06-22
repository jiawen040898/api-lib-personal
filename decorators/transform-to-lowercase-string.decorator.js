"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformToLowercaseStringArray = exports.TransformToLowercaseString = void 0;
const class_transformer_1 = require("class-transformer");
const TransformToLowercaseString = () => {
    return (0, class_transformer_1.Transform)(({ value }) => value?.toLocaleLowerCase());
};
exports.TransformToLowercaseString = TransformToLowercaseString;
const TransformToLowercaseStringArray = () => {
    return (0, class_transformer_1.Transform)(({ value }) => value.map((item) => item?.toLocaleLowerCase()));
};
exports.TransformToLowercaseStringArray = TransformToLowercaseStringArray;
//# sourceMappingURL=transform-to-lowercase-string.decorator.js.map