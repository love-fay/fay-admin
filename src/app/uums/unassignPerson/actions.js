/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findUnAssignPersonForPage = (filterType, params) => ({
    type: types.FIND_UNASSIGN_PERSON_FOR_PAGE,
    filterType: filterType,
    params: params
});

export const findUnAssignPersonForPageFetch = () => ({
    type: types.FIND_UNASSIGN_PERSON_FOR_PAGE_FETCH
});

export const findUnAssignPersonForPageSuccess = (data, params) => ({
    type: types.FIND_UNASSIGN_PERSON_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findUnAssignPersonForPageError = (err, params) => ({
    type: types.FIND_UNASSIGN_PERSON_FOR_PAGE_ERROR,
    err: err,
    params: params
});

export const selectRowKeys = (selectedRowKeys) => ({
    type: types.SELECT_ROW_KEYS_FOR_UN_ASSIGN_PERSON,
    selectedRowKeys: selectedRowKeys
});