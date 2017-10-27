/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findRoleForPage = (params) => ({
    type: types.FIND_ROLE_FOR_PAGE,
    params: params
});

export const findRoleForPageFetch = () => ({
    type: types.FIND_ROLE_FOR_PAGE_FETCH
});

export const findRoleForPageSuccess = (data, params) => ({
    type: types.FIND_ROLE_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findRoleForPageError = (err, params) => ({
    type: types.FIND_ROLE_FOR_PAGE_ERROR,
    err: err,
    params: params
});