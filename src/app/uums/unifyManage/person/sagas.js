/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as orgStructureActions} from '../orgStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_PERSON, UPDATE_FOR_UNIFY_PERSON} from './actionTypes';
const {findById, update} = api.person;

function findPersonById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updatePerson(person) {
    const promise = update(person);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchPerson(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyPersonFetch());
        const result = yield call(findPersonById, id);
        yield put(actions.findByIdForUnifyPersonSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.USER, '人员【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyPersonError(e));
    }
}

function* fetchUpdate(data) {
    const {person} = data;
    try {
        yield put(actions.updateForUnifyPersonFetch());
        const result = yield call(updatePerson, person);
        yield put(actions.updateForUnifyPersonSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyPerson(false));
            yield put(orgStructureActions.findOrgStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.USER, '人员【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyPersonError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_PERSON, fetchPerson);
    yield takeLatest(UPDATE_FOR_UNIFY_PERSON, fetchUpdate);
}

export default sagas;