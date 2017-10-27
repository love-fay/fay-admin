/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findGroupForPageFetch, findGroupForPageSuccess, findGroupForPageError} from './actions';
import {FIND_GROUP_FOR_PAGE} from './actionTypes';

function groupPage(params) {
    const promise = api.group.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchGroupPage(data) {
    const params = data.params;
    try {
        yield put(findGroupForPageFetch());
        const result = yield call(groupPage, params);
        yield put(findGroupForPageSuccess(result, params));
    } catch (e) {
        yield put(findGroupForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_GROUP_FOR_PAGE, fetchGroupPage);
}

export default sagas;