/**
 * Created by feichongzheng on 17/9/25.
 */
import groupSagas from './sagas';
import groupReducer from './reducer';
import view from './views/group';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {ReducerNames} from '../../constants';
const groupName = ReducerNames.uums.group;
const authName = ReducerNames.uums.auth;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [groupName]: groupReducer,
    [authName]: authReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [assignPersonName]: assignPersonReducer
};

const sagas = {
    [groupName]: groupSagas,
    [authName]: authSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [assignPersonName]: assignPersonSagas
};

export {sagas, reducer, view};