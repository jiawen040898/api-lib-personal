"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceFactory = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dataSourceFactory = async (options) => {
    if (!options) {
        throw new common_1.InternalServerErrorException('Connection options is not available!');
    }
    return new typeorm_1.DataSource(options);
};
exports.dataSourceFactory = dataSourceFactory;
//# sourceMappingURL=typeorm-data-source.factory.js.map