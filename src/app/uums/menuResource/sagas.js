/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findMenuResourceForTreeTableFetch, findMenuResourceForTreeTableSuccess, findMenuResourceForTreeTableError} from './actions';
import {FIND_MENURESOURCE_FOR_TREE_TABLE} from './actionTypes';

function menuResourceTreeTable(params) {
    const promise = api.menuResource.findInTree(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchMenuResourceTreeTable(data) {
    const {params, expandedRowKeys} = data;
    try {
        yield put(findMenuResourceForTreeTableFetch());
        const result = yield call(menuResourceTreeTable, params);
        yield put(findMenuResourceForTreeTableSuccess(result, params, expandedRowKeys));
    } catch (e) {
        yield put(findMenuResourceForTreeTableError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_MENURESOURCE_FOR_TREE_TABLE, fetchMenuResourceTreeTable);
}

export default sagas;