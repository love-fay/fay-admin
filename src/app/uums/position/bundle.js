/**
 * Created by feichongzheng on 17/9/25.
 */
import positionSagas from './sagas';
import positionReducer from './reducer';
import view from './views/position';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {ReducerNames} from '../../constants';
const positionName = ReducerNames.uums.position;
const authName = ReducerNames.uums.auth;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;

const reducer = {
    [positionName]: positionReducer,
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [authName]: authReducer
};

const sagas = {
    [positionName]: positionSagas,
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};