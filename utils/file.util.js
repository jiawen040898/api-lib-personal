"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUtil = void 0;
exports.fileUtil = {
    getFileExtension: (filePath) => {
        const fileExtIndex = filePath.lastIndexOf('.');
        if (fileExtIndex === -1) {
            return undefined;
        }
        return filePath.substring(fileExtIndex + 1);
    },
};
//# sourceMappingURL=file.util.js.map