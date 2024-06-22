"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyLocales = void 0;
const constants_1 = require("../constants");
exports.companyLocales = {
    getCompanyLocale: (company, shouldFormatUnderScore = false) => {
        const currentLocale = company.locales.find((i) => i.is_default)?.locale ||
            constants_1.DEFAULT_LOCALE;
        return shouldFormatUnderScore
            ? currentLocale.replace('-', '_')
            : currentLocale;
    },
};
//# sourceMappingURL=company-locales.util.js.map