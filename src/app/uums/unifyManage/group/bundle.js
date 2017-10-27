/**
 * Created by feichongzheng on 17/9/25.
 */
import groupSagas from './sagas';
import groupReducer from './reducer';
import view from './views/group';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {ReducerNames} from '../../../constants';
const groupName = ReducerNames.uums.unifyGroup;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [groupName]: groupReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [groupName]: groupSagas
};

export {sagas, reducer, view};