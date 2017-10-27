/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findOrgRoleForPage = (params) => ({
    type: types.FIND_ORGROLE_FOR_PAGE,
    params: params
});

export const findOrgRoleForPageFetch = () => ({
    type: types.FIND_ORGROLE_FOR_PAGE_FETCH
});

export const findOrgRoleForPageSuccess = (data, params) => ({
    type: types.FIND_ORGROLE_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findOrgRoleForPageError = (err, params) => ({
    type: types.FIND_ORGROLE_FOR_PAGE_ERROR,
    err: err,
    params: params
});