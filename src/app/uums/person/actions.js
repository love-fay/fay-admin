/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findPersonForPage = (params) => ({
    type: types.FIND_PERSON_FOR_PAGE,
    params: params
});

export const findPersonForPageFetch = () => ({
    type: types.FIND_PERSON_FOR_PAGE_FETCH
});

export const findPersonForPageSuccess = (data, params) => ({
    type: types.FIND_PERSON_FOR_PAGE_SUCCESS,
    data: data,
    params: params
});

export const findPersonForPageError = (err, params) => ({
    type: types.FIND_PERSON_FOR_PAGE_ERROR,
    err: err,
    params: params
});