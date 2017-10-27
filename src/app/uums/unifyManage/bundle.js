/**
 * Created by feichongzheng on 17/9/25.
 */
import unifyManageReducer from './reducer';
import view from './views/unifyManage';
import {reducer as appReducer, sagas as appSagas} from './app';
import {reducer as controllerReducer, sagas as controllerSagas} from './controllerResource';
import {reducer as groupReducer, sagas as groupSagas} from './group';
import {reducer as menuReducer, sagas as menuSagas} from './menuResource';
import {reducer as orgReducer, sagas as orgSagas} from './org';
import {reducer as orgRoleReducer, sagas as orgRoleSagas} from './orgRole';
import {reducer as orgStructureReducer, sagas as orgStructureSagas} from './orgStructure';
import {reducer as personReducer, sagas as personSagas} from './person';
import {reducer as positionReducer, sagas as positionSagas} from './position';
import {reducer as resourceStructureReducer, sagas as resourceStructureSagas} from './resourceStructure';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../unassignPerson';
import {reducer as unitInfoReducer} from './unitInfo';
import {ReducerNames} from '../../constants';
const unifyManageName = ReducerNames.uums.unify;
const appName = ReducerNames.uums.unifyApp;
const controllerName = ReducerNames.uums.unifyController;
const groupName = ReducerNames.uums.unifyGroup;
const menuName = ReducerNames.uums.unifyMenu;
const orgName = ReducerNames.uums.unifyOrg;
const orgRoleName = ReducerNames.uums.unifyOrgRole;
const orgStructureName = ReducerNames.uums.unifyOrgStructure;
const personName = ReducerNames.uums.unifyPerson;
const positionName = ReducerNames.uums.unifyPosition;
const resourceStructureName = ReducerNames.uums.unifyResourceStructure;
const unitInfoName = ReducerNames.uums.unifyUnitInfo;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [unifyManageName]: unifyManageReducer,
    [unitInfoName]: unitInfoReducer,
    [resourceStructureName]: resourceStructureReducer,
    [positionName]: positionReducer,
    [personName]: personReducer,
    [orgStructureName]: orgStructureReducer,
    [orgRoleName]: orgRoleReducer,
    [orgName]: orgReducer,
    [menuName]: menuReducer,
    [groupName]: groupReducer,
    [controllerName]: controllerReducer,
    [appName]: appReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [resourceStructureName]: resourceStructureSagas,
    [positionName]: positionSagas,
    [orgStructureName]: orgStructureSagas,
    [personName]: personSagas,
    [orgRoleName]: orgRoleSagas,
    [orgName]: orgSagas,
    [menuName]: menuSagas,
    [groupName]: groupSagas,
    [controllerName]: controllerSagas,
    [appName]: appSagas
};

export {reducer, view, sagas};