/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findPositionForPage = (params) => ({
    type: types.FIND_POSITION_FOR_PAGE,
    params: params
});

export const findPositionForPageFetch = () => ({
    type: types.FIND_POSITION_FOR_PAGE_FETCH
});

export const findPositionForPageSuccess = (data, params) => ({
    type: types.FIND_POSITION_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findPositionForPageError = (err, params) => ({
    type: types.FIND_POSITION_FOR_PAGE_ERROR,
    err: err,
    params: params
});