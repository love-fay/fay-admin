/**
 * Created by feichongzheng on 17/9/25.
 */
import orgRoleSagas from './sagas';
import orgRoleReducer from './reducer';
import view from './views/orgRole';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {ReducerNames} from '../../constants';
const orgRoleName = ReducerNames.uums.orgRole;
const authName = ReducerNames.uums.auth;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;

const reducer = {
    [orgRoleName]: orgRoleReducer,
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [authName]: authReducer
};

const sagas = {
    [orgRoleName]: orgRoleSagas,
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};