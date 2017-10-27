/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findAppForPageFetch, findAppForPageSuccess, findAppForPageError} from './actions';
import {FIND_APP_FOR_PAGE} from './actionTypes';

function appPage(params) {
    const promise = api.app.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchAppPage(data) {
    const params = data.params;
    try {
        yield put(findAppForPageFetch());
        const result = yield call(appPage, params);
        yield put(findAppForPageSuccess(result, params));
    } catch (e) {
        yield put(findAppForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_APP_FOR_PAGE, fetchAppPage);
}

export default sagas;