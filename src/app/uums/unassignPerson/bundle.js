/**
 * Created by feichongzheng on 17/9/25.
 */
import unAssignPersonSagas from './sagas';
import unAssignPersonReducer from './reducer';
import view from './views/unAssignPerson';
import {ReducerNames} from '../../constants';
const unAssignPersonName = ReducerNames.uums.unAssignPerson;
const reducer = {
    [unAssignPersonName]: unAssignPersonReducer
};

const sagas = {
    [unAssignPersonName]: unAssignPersonSagas
};

export {sagas, reducer, view};