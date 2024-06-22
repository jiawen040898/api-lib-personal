"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalPipes = void 0;
const common_1 = require("@nestjs/common");
const globalPipes = (classTransformOptions) => [
    new common_1.ValidationPipe({
        disableErrorMessages: false,
        forbidUnknownValues: false,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
            ...classTransformOptions,
        },
    }),
];
exports.globalPipes = globalPipes;
//# sourceMappingURL=global.pipe.js.map