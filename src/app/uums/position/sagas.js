/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findPositionForPageFetch, findPositionForPageSuccess, findPositionForPageError} from './actions';
import {FIND_POSITION_FOR_PAGE} from './actionTypes';

function positionPage(params) {
    const promise = api.position.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchPositionPage(data) {
    const params = data.params;
    try {
        yield put(findPositionForPageFetch());
        const result = yield call(positionPage, params);
        yield put(findPositionForPageSuccess(result, params));
    } catch (e) {
        yield put(findPositionForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_POSITION_FOR_PAGE, fetchPositionPage);
}

export default sagas;