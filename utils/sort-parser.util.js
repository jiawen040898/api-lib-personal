"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldName = exports.sortParser = void 0;
const lodash_1 = require("lodash");
const constants_1 = require("../constants");
exports.sortParser = {
    toOrderByCondition: (params, alias, aliasList) => {
        const sortArgs = params
            ?.replace(/\s/g, '')
            .toLocaleLowerCase()
            .split(',');
        if ((0, lodash_1.isEmpty)(sortArgs) || sortArgs.every((arg) => (0, lodash_1.isEmpty)(arg))) {
            return null;
        }
        let output = null;
        const sortOperators = ['+', '-'];
        sortArgs.forEach((x) => {
            const fChar = x.charAt(0);
            let order = constants_1.SortOrder.ASC;
            let nulls = 'NULLS FIRST';
            let sortField = x;
            if (sortOperators.includes(fChar)) {
                sortField = x.substring(1);
                if (fChar === '-') {
                    order = constants_1.SortOrder.DESC;
                    nulls = 'NULLS LAST';
                }
            }
            if ((0, lodash_1.isEmpty)(sortField.trim())) {
                return;
            }
            output = {
                ...output,
                [(0, exports.getFieldName)(alias, sortField, aliasList)]: { order, nulls },
            };
        });
        return output;
    },
    getOrderBys: (params, alias, aliasList) => {
        const sortArgs = params
            ?.replace(/\s/g, '')
            .toLocaleLowerCase()
            .split(',');
        if (!sortArgs ||
            (0, lodash_1.isEmpty)(sortArgs) ||
            sortArgs.every((arg) => (0, lodash_1.isEmpty)(arg))) {
            return [];
        }
        const output = [];
        const sortOperators = ['+', '-'];
        sortArgs.forEach((x) => {
            const fChar = x.charAt(0);
            let order = constants_1.SortOrder.ASC;
            let nulls = 'NULLS FIRST';
            let sortField = x;
            if (sortOperators.includes(fChar)) {
                sortField = x.substring(1);
                if (fChar === '-') {
                    order = constants_1.SortOrder.DESC;
                    nulls = 'NULLS LAST';
                }
            }
            if ((0, lodash_1.isEmpty)(sortField.trim())) {
                return;
            }
            output.push({
                sort: (0, exports.getFieldName)(alias, sortField, aliasList),
                order,
                nulls,
            });
        });
        return output;
    },
};
const getFieldName = (alias, sortField, aliasList) => {
    let theAlias = alias;
    if (aliasList && !(0, lodash_1.isEmpty)(aliasList)) {
        theAlias = aliasList[sortField];
    }
    return theAlias ? `${theAlias}.${sortField}` : sortField;
};
exports.getFieldName = getFieldName;
//# sourceMappingURL=sort-parser.util.js.map