export declare const exceptionUtil: {
    isException: (err: unknown) => err is Error;
    getExceptionExtras(exception: SafeAny): SafeAny;
};
