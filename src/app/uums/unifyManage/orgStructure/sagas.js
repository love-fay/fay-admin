/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import {findOrgStructureInTreeFetch, findOrgStructureInTreeSuccess, findOrgStructureInTreeError, expandKeysForOrgStructure} from './actions';
import {FIND_ORG_STRUCTURE_IN_TREE} from './actionTypes';

function orgStructureInTree(params) {
    const promise = api.unify.findOrgInTree(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchOrgStructureInTree(data) {
    const params = data.params;
    const firstLoad = data.firstLoad;
    try {
        yield put(findOrgStructureInTreeFetch());
        const result = yield call(orgStructureInTree, params);
        yield put(findOrgStructureInTreeSuccess(result, params, firstLoad));
        if (result.success && firstLoad) {
            const {data} = result;
            let firstKey = (data && data.length === 0) ? null : data[0].treeObject.type + '_' + data[0].treeObject.id;
            yield put(expandKeysForOrgStructure([firstKey], false));
        }
    } catch (e) {
        yield put(findOrgStructureInTreeError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ORG_STRUCTURE_IN_TREE, fetchOrgStructureInTree);
}

export default sagas;