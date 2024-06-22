"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerUtil = void 0;
const getRouteFromRequest = (req) => {
    return `${req.method}:${req?.route?.path}`;
};
const getRouteParamsFromRequest = (req) => {
    return {
        url_params: req?.params,
        query_params: req?.query,
    };
};
const getUserDetailFromRequest = (req) => {
    return {
        company_id: req.user?.company_id,
        user_account_id: req.user?.user_account_id,
    };
};
exports.loggerUtil = {
    getRouteFromRequest,
    getRouteParamsFromRequest,
    getUserDetailFromRequest,
};
//# sourceMappingURL=logger.util.js.map