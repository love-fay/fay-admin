/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../resource';
import {findControllerResourceForTreeTableFetch, findControllerResourceForTreeTableSuccess, findControllerResourceForTreeTableError} from './actions';
import {FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE} from './actionTypes';

function controllerResourceTreeTable(params) {
    const promise = api.controllerResource.findInTree(params);
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function* fetchControllerResourceTreeTable(data) {
    const {params, expandedRowKeys} = data;
    try {
        yield put(findControllerResourceForTreeTableFetch());
        const result = yield call(controllerResourceTreeTable, params);
        yield put(findControllerResourceForTreeTableSuccess(result, params, expandedRowKeys));
    } catch (e) {
        yield put(findControllerResourceForTreeTableError(e, params));
    }
}

function* sagas() {
    yield takeLatest(FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE, fetchControllerResourceTreeTable);
}

export default sagas;