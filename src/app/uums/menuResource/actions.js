/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findMenuResourceForTreeTable = (params, expandedRowKeys) => ({
    type: types.FIND_MENURESOURCE_FOR_TREE_TABLE,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findMenuResourceForTreeTableFetch = () => ({
    type: types.FIND_MENURESOURCE_FOR_TREE_TABLE_FETCH
});

export const findMenuResourceForTreeTableSuccess = (data, params, expandedRowKeys) => ({
    type: types.FIND_MENURESOURCE_FOR_TREE_TABLE_SUCCESS,
    data: data,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findMenuResourceForTreeTableError = (err, params) => ({
    type: types.FIND_MENURESOURCE_FOR_TREE_TABLE_ERROR,
    err: err,
    params: params
});

export const expandMenuResourceForTreeTable = (expandedRowKeys) => ({
    type: types.EXPAND_MENURESOURCE_FOR_TREE_TABLE,
    expandedRowKeys: expandedRowKeys
});