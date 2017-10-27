/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as orgStructureActions} from '../orgStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_GROUP, UPDATE_FOR_UNIFY_GROUP} from './actionTypes';
const {findById, update} = api.group;

function findGroupById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateGroup(group) {
    const promise = update(group);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchGroup(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyGroupFetch());
        const result = yield call(findGroupById, id);
        yield put(actions.findByIdForUnifyGroupSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.GROUP, '部门【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyGroupError(e));
    }
}

function* fetchUpdate(data) {
    const {group} = data;
    try {
        yield put(actions.updateForUnifyGroupFetch());
        const result = yield call(updateGroup, group);
        yield put(actions.updateForUnifyGroupSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyGroup(false));
            yield put(orgStructureActions.findOrgStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.GROUP, '部门【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyGroupError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_GROUP, fetchGroup);
    yield takeLatest(UPDATE_FOR_UNIFY_GROUP, fetchUpdate);
}

export default sagas;