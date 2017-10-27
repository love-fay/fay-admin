/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {
    findAssignUserForPageFetch, findAssignUserForPageSuccess, findAssignUserForPageError,
} from './actions';
import {FIND_ASSIGN_USER_FOR_PAGE} from './actionTypes';
import {FilterType} from '../constants';

function assignUserPage(data) {
    const {filterType, params} = data;
    let promise;
    switch (filterType) {
        case FilterType.ROLE:
            promise = api.role.findAssignedUsers(params);
            break;
        default:
            break;
    }
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchAssignUserPage(data) {
    const params = data.params;
    try {
        yield put(findAssignUserForPageFetch());
        const result = yield call(assignUserPage, data);
        yield put(findAssignUserForPageSuccess(result, params));
    } catch (e) {
        yield put(findAssignUserForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ASSIGN_USER_FOR_PAGE, fetchAssignUserPage);
}

export default sagas;