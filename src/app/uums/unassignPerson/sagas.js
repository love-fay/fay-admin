/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {
    findUnAssignPersonForPageFetch, findUnAssignPersonForPageSuccess, findUnAssignPersonForPageError
} from './actions';
import {FIND_UNASSIGN_PERSON_FOR_PAGE} from './actionTypes';
import {FilterType} from '../constants';

function unassignPersonPage(data) {
    const {filterType, params} = data;
    let promise;
    switch (filterType) {
        case FilterType.ORG:
            promise = api.org.findUnAssignedUsers(params);
            break;
        case FilterType.GROUP:
            promise = api.group.findUnAssignedUsers(params);
            break;
        case FilterType.POSITION:
            promise = api.position.findUnAssignedUsers(params);
            break;
        case FilterType.ORGROLE:
            promise = api.orgRole.findUnAssignedUsers(params);
            break;
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

function* fetchUnAssignPersonPage(data) {
    const params = data.params;
    try {
        yield put(findUnAssignPersonForPageFetch());
        const result = yield call(unassignPersonPage, data);
        yield put(findUnAssignPersonForPageSuccess(result, params));
    } catch (e) {
        yield put(findUnAssignPersonForPageError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_UNASSIGN_PERSON_FOR_PAGE, fetchUnAssignPersonPage);
}

export default sagas;