"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timezoneUtil = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
exports.timezoneUtil = {
    getCurrentLocalDateString: (timezone) => {
        return (0, moment_timezone_1.default)().tz(timezone).format('YYYY-MM-DD');
    },
};
//# sourceMappingURL=timezone.util.js.map