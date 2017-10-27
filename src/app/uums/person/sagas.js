/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findPersonForPageFetch, findPersonForPageSuccess, findPersonForPageError} from './actions';
import {FIND_PERSON_FOR_PAGE} from './actionTypes';

function personPage(params) {
    const promise = api.person.findForPage(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchPersonPage(data) {
    const params = data.params;
    try {
        yield put(findPersonForPageFetch());
        const result = yield call(personPage, params);
        yield put(findPersonForPageSuccess(result, params));
    } catch (e) {
        yield put(findPersonForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_PERSON_FOR_PAGE, fetchPersonPage);
}

export default sagas;