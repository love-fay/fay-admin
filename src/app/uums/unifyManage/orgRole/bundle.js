/**
 * Created by feichongzheng on 17/9/25.
 */
import orgRoleSagas from './sagas';
import orgRoleReducer from './reducer';
import view from './views/orgRole';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {ReducerNames} from '../../../constants';
const orgRoleName = ReducerNames.uums.unifyOrgRole;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [orgRoleName]: orgRoleReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [orgRoleName]: orgRoleSagas
};

export {sagas, reducer, view};