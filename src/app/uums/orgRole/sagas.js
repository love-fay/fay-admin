/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findOrgRoleForPageFetch, findOrgRoleForPageSuccess, findOrgRoleForPageError} from './actions';
import {FIND_ORGROLE_FOR_PAGE} from './actionTypes';

function orgRolePage(params) {
    const promise = api.orgRole.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchOrgRolePage(data) {
    const params = data.params;
    try {
        yield put(findOrgRoleForPageFetch());
        const result = yield call(orgRolePage, params);
        yield put(findOrgRoleForPageSuccess(result, params));
    } catch (e) {
        yield put(findOrgRoleForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ORGROLE_FOR_PAGE, fetchOrgRolePage);
}

export default sagas;