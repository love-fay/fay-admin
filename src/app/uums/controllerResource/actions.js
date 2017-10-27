/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findControllerResourceForTreeTable = (params, expandedRowKeys) => ({
    type: types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findControllerResourceForTreeTableFetch = () => ({
    type: types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_FETCH
});

export const findControllerResourceForTreeTableSuccess = (data, params, expandedRowKeys) => ({
    type: types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_SUCCESS,
    data: data,
    params: params,
    expandedRowKeys: expandedRowKeys
});

export const findControllerResourceForTreeTableError = (err, params) => ({
    type: types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_ERROR,
    err: err,
    params: params
});

export const expandControllerResourceForTreeTable = (expandedRowKeys) => ({
    type: types.EXPAND_CONTROLLERRESOURCE_FOR_TREE_TABLE,
    expandedRowKeys: expandedRowKeys
});