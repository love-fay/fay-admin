/**
 * Created by feichongzheng on 17/9/25.
 */
import {FIND_ORG_FOR_TREE_TABLE, FIND_ORG_FOR_TREE_TABLE_FETCH, FIND_ORG_FOR_TREE_TABLE_SUCCESS, FIND_ORG_FOR_TREE_TABLE_ERROR, EXPAND_ORG_FOR_TREE_TABLE} from './actionTypes';

export const findOrgForTreeTable = (params, expandedRowKeys) => ({
    type: FIND_ORG_FOR_TREE_TABLE,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findOrgForTreeTableFetch = () => ({
    type: FIND_ORG_FOR_TREE_TABLE_FETCH
});

export const findOrgForTreeTableSuccess = (data, params, expandedRowKeys) => ({
    type: FIND_ORG_FOR_TREE_TABLE_SUCCESS,
    data: data,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findOrgForTreeTableError = (err, params) => ({
    type: FIND_ORG_FOR_TREE_TABLE_ERROR,
    err: err,
    params: params
});

export const expandOrgForTreeTable = (expandedRowKeys) => ({
    type: EXPAND_ORG_FOR_TREE_TABLE,
    expandedRowKeys: expandedRowKeys
});