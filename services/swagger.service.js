"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app, apiInfo) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle(apiInfo.title)
        .setDescription(apiInfo.description)
        .setVersion(apiInfo.prefixVersion)
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'JWT')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(`/${apiInfo.prefixPath}/${apiInfo.prefixVersion}/docs`, app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.service.js.map