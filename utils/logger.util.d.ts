export declare const loggerUtil: {
    getRouteFromRequest: (req: SafeAny) => string;
    getRouteParamsFromRequest: (req: SafeAny) => Record<string, Record<string, SafeAny>>;
    getUserDetailFromRequest: (req: SafeAny) => Record<string, SafeAny>;
};
