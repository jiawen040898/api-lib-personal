"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberUtil = void 0;
const roundDecimalPlace = (value, decimalPlaces = 2) => {
    return Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) +
        'e-' +
        decimalPlaces);
};
exports.numberUtil = {
    roundDecimalPlace,
};
//# sourceMappingURL=number.util.js.map