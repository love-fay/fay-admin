/**
 * Created by feichongzheng on 17/9/25.
 */
import unAssignUserSagas from './sagas';
import unAssignUserReducer from './reducer';
import view from './views/unAssignUser';
import {ReducerNames} from '../../constants';
const unAssignUserName = ReducerNames.uums.unAssignUser;
const reducer = {
    [unAssignUserName]: unAssignUserReducer
};

const sagas = {
    [unAssignUserName]: unAssignUserSagas
};

export {sagas, reducer, view};