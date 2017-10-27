/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as resourceStructureActions} from '../resourceStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_APP, UPDATE_FOR_UNIFY_APP} from './actionTypes';
const {findById, update} = api.app;

function findAppById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateApp(app) {
    const promise = update(app);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchApp(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyAppFetch());
        const result = yield call(findAppById, id);
        yield put(actions.findByIdForUnifyAppSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.APP, '应用系统【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyAppError(e));
    }
}

function* fetchUpdate(data) {
    const {app} = data;
    try {
        yield put(actions.updateForUnifyAppFetch());
        const result = yield call(updateApp, app);
        yield put(actions.updateForUnifyAppSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyApp(false));
            yield put(resourceStructureActions.findResourceStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.APP, '应用系统【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyAppError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_APP, fetchApp);
    yield takeLatest(UPDATE_FOR_UNIFY_APP, fetchUpdate);
}

export default sagas;