export declare const generatorUtil: {
    uuid: () => string;
    password: (length: number) => string;
    cacheKey: (cacheKey: string, ...params: (string | number | undefined | null)[]) => string;
    alphaNumericCode: (length: number) => string;
};
