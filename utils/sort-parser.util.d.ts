import { OrderByCondition } from 'typeorm';
export type AliasList = {
    [fieldName: string]: string;
};
export type OrderBy = {
    sort: string;
    order: 'ASC' | 'DESC';
    nulls: 'NULLS FIRST' | 'NULLS LAST';
};
export declare const sortParser: {
    toOrderByCondition: (params: string, alias: string, aliasList?: AliasList) => OrderByCondition | null;
    getOrderBys: (params: string | undefined, alias: string, aliasList?: AliasList) => OrderBy[];
};
export declare const getFieldName: (alias: string, sortField: string, aliasList?: AliasList) => string;
