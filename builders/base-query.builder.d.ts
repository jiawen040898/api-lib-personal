import { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm';
import { SortOrder } from '../constants';
import { PaginationFilterDto } from '../dto';
import { AliasList } from '../utils';
export type FilterActions<T> = Record<keyof Omit<T, keyof PaginationFilterDto | 'sort_by'>, (criteria: SafeAny) => SafeAny>;
export declare abstract class BaseQueryBuilder<T extends ObjectLiteral> {
    readonly alias: string;
    protected readonly hasIsDeletedField: boolean;
    protected readonly builder: SelectQueryBuilder<T>;
    protected includeDeletedItems: boolean;
    constructor(repository: Repository<T>, alias: string, hasIsDeletedField?: boolean);
    build(): SelectQueryBuilder<T>;
    withDeletedItems(): this;
    withPagination(filter: PaginationFilterDto): this;
    orderByCreatedAt(sortOrder?: SortOrder): this;
    orderByUpdatedAt(sortOrder?: SortOrder): this;
    select(selection: string[]): this;
    select(selection: (qb: this) => string[]): this;
    addSelect(selection: string[]): this;
    addSelect(selection: (qb: this) => string[]): this;
    protected processFilterActions<T extends object>(filter: T, filterActions: FilterActions<T>): void;
    protected baseOrderBy(sortByParams?: string, aliasList?: AliasList): this;
}
