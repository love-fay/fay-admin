/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findOrgForTreeTableFetch, findOrgForTreeTableSuccess, findOrgForTreeTableError} from './actions';
import {FIND_ORG_FOR_TREE_TABLE} from './actionTypes';

function orgTreeTable(params) {
    const promise = api.org.findInTree(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchOrgTreeTable(data) {
    const {params, expandedRowKeys} = data;
    try {
        yield put(findOrgForTreeTableFetch());
        const result = yield call(orgTreeTable, params);
        yield put(findOrgForTreeTableSuccess(result, params, expandedRowKeys));
    } catch (e) {
        yield put(findOrgForTreeTableError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_ORG_FOR_TREE_TABLE, fetchOrgTreeTable);
}

export default sagas;