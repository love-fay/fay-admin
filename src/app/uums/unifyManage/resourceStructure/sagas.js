/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import {findResourceStructureInTreeFetch, findResourceStructureInTreeSuccess, findResourceStructureInTreeError, findAuthedForResourceStrutureSuccess, expandKeysForResourceStructure} from './actions';
import {FIND_RESOURCE_STRUCTURE_IN_TREE, FIND_AUTHED_FOR_RESOURCE_STRUCTURE} from './actionTypes';

function resourceStructure(params) {
    const promise = api.unify.findResourceInTree(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function authedResource(params) {
    const promise = api.resource.findAuthedResource(params);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchResourceStructure(data) {
    const params = data.params;
    const firstLoad = data.firstLoad;
    try {
        yield put(findResourceStructureInTreeFetch());
        const result = yield call(resourceStructure, params);
        yield put(findResourceStructureInTreeSuccess(result, params, firstLoad));
        if (result.success && firstLoad) {
            const {data} = result;
            let firstKey = (data && data.length === 0) ? null : data[0].treeObject.available + '_' + data[0].treeObject.type + '_' + data[0].treeObject.id;
            yield put(expandKeysForResourceStructure([firstKey], false));
        }
    } catch (e) {
        yield put(findResourceStructureInTreeError(e, params));
    }
}

function* fetchAthedResource(data) {
    const params = data.params;
    try {
        const result = yield call(authedResource, params);
        yield put(findAuthedForResourceStrutureSuccess(result, params));
    } catch (e) {
        throw e;
    }
}

function* sagas() {
    yield takeLatest(FIND_RESOURCE_STRUCTURE_IN_TREE, fetchResourceStructure);
    yield takeLatest(FIND_AUTHED_FOR_RESOURCE_STRUCTURE, fetchAthedResource);
}

export default sagas;