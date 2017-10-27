/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as orgStructureActions} from '../orgStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_POSITION, UPDATE_FOR_UNIFY_POSITION} from './actionTypes';
const {findById, update} = api.position;

function findPositionById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updatePosition(position) {
    const promise = update(position);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchPerson(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyPositionFetch());
        const result = yield call(findPositionById, id);
        yield put(actions.findByIdForUnifyPositionSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.POSITION, '职位【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyPositionError(e));
    }
}

function* fetchUpdate(data) {
    const {position} = data;
    try {
        yield put(actions.updateForUnifyPositionFetch());
        const result = yield call(updatePosition, position);
        yield put(actions.updateForUnifyPositionSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyPosition(false));
            yield put(orgStructureActions.findOrgStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.POSITION, '职位【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyPositionError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_POSITION, fetchPerson);
    yield takeLatest(UPDATE_FOR_UNIFY_POSITION, fetchUpdate);
}

export default sagas;