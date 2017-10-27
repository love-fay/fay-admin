/**
 * Created by feichongzheng on 17/9/25.
 */
import roleSagas from './sagas';
import roleReducer from './reducer';
import view from './views/role';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignUserReducer, sagas as assignUserSagas} from '../assignUser';
import {reducer as unAssignUserReducer, sagas as unAssignUserSagas} from '../unAssignUser';
import {ReducerNames} from '../../constants';
const roleName = ReducerNames.uums.role;
const authName = ReducerNames.uums.auth;
const assignUserName = ReducerNames.uums.assignUser;
const unAssignUserName = ReducerNames.uums.unAssignUser;

const reducer = {
    [roleName]: roleReducer,
    [assignUserName]: assignUserReducer,
    [unAssignUserName]: unAssignUserReducer,
    [authName]: authReducer
};

const sagas = {
    [roleName]: roleSagas,
    [assignUserName]: assignUserSagas,
    [unAssignUserName]: unAssignUserSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};