/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as orgStructureActions} from '../orgStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_ORG_ROLE, UPDATE_FOR_UNIFY_ORG_ROLE} from './actionTypes';
const {findById, update} = api.orgRole;

function findOrgRoleById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateOrgRole(orgRole) {
    const promise = update(orgRole);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchOrgRole(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyOrgRoleFetch());
        const result = yield call(findOrgRoleById, id);
        yield put(actions.findByIdForUnifyOrgRoleSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.ORGROLE, '角色【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyOrgRoleError(e));
    }
}

function* fetchUpdate(data) {
    const {orgRole} = data;
    try {
        yield put(actions.updateForUnifyOrgRoleFetch());
        const result = yield call(updateOrgRole, orgRole);
        yield put(actions.updateForUnifyOrgRoleSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyOrgRole(false));
            yield put(orgStructureActions.findOrgStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.ORGROLE, '角色【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyOrgRoleError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_ORG_ROLE, fetchOrgRole);
    yield takeLatest(UPDATE_FOR_UNIFY_ORG_ROLE, fetchUpdate);
}

export default sagas;