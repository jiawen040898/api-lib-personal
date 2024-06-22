"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationFilterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
class PaginationFilterDto {
    constructor(page, pageSize) {
        this.page = page;
        this.page_size = pageSize;
    }
    get getLimit() {
        if (!this.page_size) {
            return constants_1.PaginationConfig.DEFAULT_PAGE_SIZE;
        }
        if (this.page_size < constants_1.PaginationConfig.MIN_PAGE_SIZE) {
            return constants_1.PaginationConfig.MIN_PAGE_SIZE;
        }
        if (this.page_size > constants_1.PaginationConfig.MAX_PAGE_SIZE) {
            return constants_1.PaginationConfig.MAX_PAGE_SIZE;
        }
        return this.page_size;
    }
    get getOffset() {
        if (this.page && this.page > 0) {
            return (this.page - 1) * this.getLimit;
        }
        return 0;
    }
}
exports.PaginationFilterDto = PaginationFilterDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        default: 1,
        minimum: 1,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PaginationFilterDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        default: `${constants_1.PaginationConfig.DEFAULT_PAGE_SIZE}`,
        minimum: constants_1.PaginationConfig.MIN_PAGE_SIZE,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], PaginationFilterDto.prototype, "page_size", void 0);
//# sourceMappingURL=pagination-filter.dto.js.map