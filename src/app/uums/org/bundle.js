/**
 * Created by feichongzheng on 17/9/25.
 */
import orgSagas from './sagas';
import orgReducer from './reducer';
import view from './views/org';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {ReducerNames} from '../../constants';
const orgName = ReducerNames.uums.org;
const authName = ReducerNames.uums.auth;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;

const reducer = {
    [orgName]: orgReducer,
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [authName]: authReducer
};

const sagas = {
    [orgName]: orgSagas,
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};