"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtil = void 0;
exports.stringUtil = {
    getDomainName: (value) => {
        return value?.replace('https://', '').replace('/', '') || '';
    },
    getEmailDomainName: (email) => {
        return email.split('@')[1];
    },
    decodeBase64: (value) => {
        return Buffer.from(value, 'base64').toString('utf8');
    },
    encodeBase64: (value) => {
        return Buffer.from(value).toString('base64');
    },
    getUserDisplayName(firstName = '', lastName = '', disabled = false, disabledText = '[Deactivated]') {
        const displayName = `${firstName} ${lastName ?? ''}`.trim();
        return disabled ? `${displayName} ${disabledText}` : displayName;
    },
    getInitialFromName: (name) => {
        return name.trim().charAt(0).toUpperCase();
    },
};
//# sourceMappingURL=string.util.js.map