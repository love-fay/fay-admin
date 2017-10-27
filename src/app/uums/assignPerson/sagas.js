/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {
    findAssignPersonForPageFetch, findAssignPersonForPageSuccess, findAssignPersonForPageError,
} from './actions';
import {FIND_ASSIGN_PERSON_FOR_PAGE} from './actionTypes';
import {FilterType} from '../constants';

function assignPersonPage(data) {
    const {filterType, params} = data;
    let promise;
    switch (filterType) {
        case FilterType.ORG:
            promise = api.org.findAssignedUsers(params);
            break;
        case FilterType.GROUP:
            promise = api.group.findAssignedUsers(params);
            break;
        case FilterType.POSITION:
            promise = api.position.findAssignedUsers(params);
            break;
        case FilterType.ORGROLE:
            promise = api.orgRole.findAssignedUsers(params);
            break;
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

function* fetchAssignPersonPage(data) {
    const params = data.params;
    try {
        yield put(findAssignPersonForPageFetch());
        const result = yield call(assignPersonPage, data);
        yield put(findAssignPersonForPageSuccess(result, params));
    } catch (e) {
        yield put(findAssignPersonForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ASSIGN_PERSON_FOR_PAGE, fetchAssignPersonPage);
}

export default sagas;