"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTimeUtil = void 0;
const moment_1 = __importDefault(require("moment"));
const now = () => new Date();
const getUtcDateOnly = (value) => {
    return moment_1.default.utc((0, moment_1.default)(value).format('YYYY-MM-DD'));
};
const getUtcDateOnlyIsoString = (value) => exports.dateTimeUtil.getUtcDateOnly(value).toISOString();
const getUtcDateIsoString = (value) => (0, moment_1.default)(value).utc().toISOString();
const addDays = (amount, value = now()) => {
    return (0, moment_1.default)(value).add(amount, 'days').toDate();
};
const isBeforeNow = (value) => {
    return new Date().getTime() > new Date(value).getTime();
};
const isAfterNow = (value) => {
    return new Date().getTime() < new Date(value).getTime();
};
const isBefore = (date, compareDateOnly = false, dateToCompare) => {
    if (!compareDateOnly) {
        return (0, moment_1.default)(date).isBefore((0, moment_1.default)(dateToCompare));
    }
    return (0, moment_1.default)(date)
        .startOf('d')
        .isBefore((0, moment_1.default)(dateToCompare).startOf('d'), 'd');
};
const isAfter = (date, compareDateOnly = false, dateToCompare) => {
    if (!compareDateOnly) {
        return (0, moment_1.default)(date).isAfter((0, moment_1.default)(dateToCompare));
    }
    return (0, moment_1.default)(date)
        .startOf('d')
        .isAfter((0, moment_1.default)(dateToCompare).startOf('d'), 'd');
};
const formatByLocale = (date, locale, format = 'LL') => {
    return (0, moment_1.default)(date).locale(locale).format(format);
};
const compareDate = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const isSame = d1.getTime() === d2.getTime();
    if (isSame) {
        return 0;
    }
    if (d1 > d2) {
        return 1;
    }
    if (d1 < d2) {
        return -1;
    }
    return 0;
};
const getEpochNumberUntilMinute = () => {
    const dateNow = now();
    dateNow.setMilliseconds(0);
    dateNow.setSeconds(0);
    return dateNow.valueOf();
};
const getEpochNumber = () => (0, moment_1.default)().valueOf();
exports.dateTimeUtil = {
    now,
    getUtcDateOnly,
    getUtcDateOnlyIsoString,
    getUtcDateIsoString,
    addDays,
    isBeforeNow,
    isAfterNow,
    isBefore,
    isAfter,
    compareDate,
    getEpochNumberUntilMinute,
    getEpochNumber,
    formatByLocale,
};
//# sourceMappingURL=datetime.util.js.map