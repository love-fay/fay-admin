/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findUnAssignUserForPage = (filterType, params) => ({
    type: types.FIND_UNASSIGN_USER_FOR_PAGE,
    filterType: filterType,
    params: params
});

export const findUnAssignUserForPageFetch = () => ({
    type: types.FIND_UNASSIGN_USER_FOR_PAGE_FETCH
});

export const findUnAssignUserForPageSuccess = (data, params) => ({
    type: types.FIND_UNASSIGN_USER_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findUnAssignUserForPageError = (err, params) => ({
    type: types.FIND_UNASSIGN_USER_FOR_PAGE_ERROR,
    err: err,
    params: params
});

export const selectRowKeys = (selectedRowKeys) => ({
    type: types.SELECT_ROW_KEYS_FOR_UN_ASSIGN_USER,
    selectedRowKeys: selectedRowKeys
});