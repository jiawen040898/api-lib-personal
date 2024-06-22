"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformToBoolean = void 0;
const class_transformer_1 = require("class-transformer");
const utils_1 = require("../utils");
const TransformToBoolean = () => {
    return (0, class_transformer_1.Transform)(({ obj, key }) => utils_1.booleanUtil.toBoolean(obj[key]));
};
exports.TransformToBoolean = TransformToBoolean;
//# sourceMappingURL=transform-to-boolean.decorator.js.map