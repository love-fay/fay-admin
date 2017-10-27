/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findRoleForPageFetch, findRoleForPageSuccess, findRoleForPageError} from './actions';
import {FIND_ROLE_FOR_PAGE} from './actionTypes';

function rolePage(params) {
    const promise = api.role.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchRolePage(data) {
    const params = data.params;
    try {
        yield put(findRoleForPageFetch());
        const result = yield call(rolePage, params);
        yield put(findRoleForPageSuccess(result, params));
    } catch (e) {
        yield put(findRoleForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ROLE_FOR_PAGE, fetchRolePage);
}

export default sagas;