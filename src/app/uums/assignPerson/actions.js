/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findAssignPersonForPage = (filterType, params) => ({
    type: types.FIND_ASSIGN_PERSON_FOR_PAGE,
    filterType: filterType,
    params: params
});

export const findAssignPersonForPageFetch = () => ({
    type: types.FIND_ASSIGN_PERSON_FOR_PAGE_FETCH
});

export const findAssignPersonForPageSuccess = (data, params) => ({
    type: types.FIND_ASSIGN_PERSON_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findAssignPersonForPageError = (err, params) => ({
    type: types.FIND_ASSIGN_PERSON_FOR_PAGE_ERROR,
    err: err,
    params: params
});

export const selectRowKeys = (selectedRowKeys) => ({
    type: types.SELECT_ROW_KEYS_FOR_ASSIGN_PERSON,
    selectedRowKeys: selectedRowKeys
});