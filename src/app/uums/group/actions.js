/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findGroupForPage = (params) => ({
    type: types.FIND_GROUP_FOR_PAGE,
    params: params
});

export const findGroupForPageFetch = () => ({
    type: types.FIND_GROUP_FOR_PAGE_FETCH
});

export const findGroupForPageSuccess = (data, params) => ({
    type: types.FIND_GROUP_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findGroupForPageError = (err, params) => ({
    type: types.FIND_GROUP_FOR_PAGE_ERROR,
    err: err,
    params: params
});