"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseQueryBuilder = void 0;
const constants_1 = require("../constants");
const dto_1 = require("../dto");
const utils_1 = require("../utils");
class BaseQueryBuilder {
    constructor(repository, alias, hasIsDeletedField = true) {
        this.alias = alias;
        this.hasIsDeletedField = hasIsDeletedField;
        this.includeDeletedItems = false;
        this.builder = repository.createQueryBuilder(alias);
    }
    build() {
        if (this.hasIsDeletedField && !this.includeDeletedItems) {
            this.builder.andWhere(`${this.alias}.is_deleted = false`);
        }
        return this.builder;
    }
    withDeletedItems() {
        this.includeDeletedItems = true;
        return this;
    }
    withPagination(filter) {
        const pagination = new dto_1.PaginationFilterDto(filter?.page, filter?.page_size);
        this.builder.skip(pagination.getOffset).take(pagination.getLimit);
        return this;
    }
    orderByCreatedAt(sortOrder = constants_1.SortOrder.DESC) {
        this.builder.orderBy(`${this.alias}.created_at`, sortOrder);
        return this;
    }
    orderByUpdatedAt(sortOrder = constants_1.SortOrder.DESC) {
        this.builder.orderBy(`${this.alias}.updated_at`, sortOrder);
        return this;
    }
    select(selection) {
        if (typeof selection === 'function') {
            this.builder.select(selection(this));
        }
        else {
            this.builder.select(selection);
        }
        return this;
    }
    addSelect(selection) {
        if (typeof selection === 'function') {
            this.builder.addSelect(selection(this));
        }
        else {
            this.builder.addSelect(selection);
        }
        return this;
    }
    processFilterActions(filter, filterActions) {
        Object.keys(filter).forEach((key) => {
            const criteria = filter[key];
            if (criteria == null) {
                return;
            }
            const matchAction = filterActions[key];
            if (!matchAction) {
                return;
            }
            matchAction(criteria);
        });
    }
    baseOrderBy(sortByParams, aliasList) {
        const orderBys = utils_1.sortParser.getOrderBys(sortByParams, this.alias, aliasList);
        if (!orderBys.length) {
            return this.orderByCreatedAt();
        }
        for (const order of orderBys) {
            this.builder.addOrderBy(order.sort, order.order, order.nulls);
        }
        return this;
    }
}
exports.BaseQueryBuilder = BaseQueryBuilder;
//# sourceMappingURL=base-query.builder.js.map