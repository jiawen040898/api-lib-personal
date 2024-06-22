export declare const stringUtil: {
    getDomainName: (value: string | undefined) => string;
    getEmailDomainName: (email: string) => string;
    decodeBase64: (value: string) => string;
    encodeBase64: (value: string) => string;
    getUserDisplayName(firstName?: string, lastName?: string | null, disabled?: boolean, disabledText?: string): string;
    getInitialFromName: (name: string) => string;
};
