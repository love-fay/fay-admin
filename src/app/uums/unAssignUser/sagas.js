/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {
    findUnAssignUserForPageFetch, findUnAssignUserForPageSuccess, findUnAssignUserForPageError
} from './actions';
import {FIND_UNASSIGN_USER_FOR_PAGE} from './actionTypes';
import {FilterType} from '../constants';

function unassignUserPage(data) {
    const {filterType, params} = data;
    let promise;
    switch (filterType) {
        case FilterType.ROLE:
            promise = api.role.findUnAssignedUsers(params);
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

function* fetchUnAssignUserPage(data) {
    const params = data.params;
    try {
        yield put(findUnAssignUserForPageFetch());
        const result = yield call(unassignUserPage, data);
        yield put(findUnAssignUserForPageSuccess(result, params));
    } catch (e) {
        yield put(findUnAssignUserForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_UNASSIGN_USER_FOR_PAGE, fetchUnAssignUserPage);
}

export default sagas;