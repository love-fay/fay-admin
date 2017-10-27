/**
 * Created by feichongzheng on 17/9/28.
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import {api} from '../../resource';
import * as actions from './actions';
import {actions as resourceStructureActions} from '../resourceStructure';
import {actions as unitInfoActions} from '../unitInfo';
import {UnifyType} from '../constants';
import {FIND_BY_ID_FOR_UNIFY_MENU, UPDATE_FOR_UNIFY_MENU} from './actionTypes';
const {findById, update} = api.menuResource;

function findMenuById(id) {
    const promise = findById({id: id});
    return promise.then((res) => res.json())
            .then((res) => res)
            .catch( (err) => {
                throw err;
            });
}

function updateMenu(menu) {
    const promise = update(menu);
    return promise.then((res) => res.json())
        .then((res) => res)
        .catch( (err) => {
            throw err;
        });
}

function* fetchGroup(data) {
    const {id} = data;
    try {
        yield put(actions.findByIdForUnifyMenuFetch());
        const result = yield call(findMenuById, id);
        yield put(actions.findByIdForUnifyMenuSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.MENU, '菜单资源【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.findByIdForUnifyMenuError(e));
    }
}

function* fetchUpdate(data) {
    const {menu} = data;
    try {
        yield put(actions.updateForUnifyMenuFetch());
        const result = yield call(updateMenu, menu);
        yield put(actions.updateForUnifyMenuSuccess(result));
        if (result.success) {
            const {name} = result.data;
            yield put(actions.showUpdatePageForUnifyMenu(false));
            yield put(resourceStructureActions.findResourceStructureInTree({}, false));
            yield put(unitInfoActions.changeForUnitInfo(UnifyType.MENU, '菜单资源【' + name + '】'));
        }
    } catch (e) {
        yield put(actions.updateForUnifyMenuError(e));
    }
}

function* sagas() {
    yield takeLatest(FIND_BY_ID_FOR_UNIFY_MENU, fetchGroup);
    yield takeLatest(UPDATE_FOR_UNIFY_MENU, fetchUpdate);
}

export default sagas;