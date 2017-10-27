/**
 * Created by feichongzheng on 17/9/25.
 */
import orgSagas from './sagas';
import orgReducer from './reducer';
import view from './views/org';
import {reducer as assignPersonReducer, sagas as assignPersonSagas} from '../../assignPerson';
import {reducer as unAssignPersonReducer, sagas as unAssignPersonSagas} from '../../unassignPerson';
import {ReducerNames} from '../../../constants';
const orgName = ReducerNames.uums.unifyOrg;
const assignPersonName = ReducerNames.uums.assignPerson;
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [assignPersonName]: assignPersonReducer,
    [unAssignPersonName]: unAssignPersonReducer,
    [orgName]: orgReducer
};

const sagas = {
    [assignPersonName]: assignPersonSagas,
    [unAssignPersonName]: unAssignPersonSagas,
    [orgName]: orgSagas
};

export {sagas, reducer, view};