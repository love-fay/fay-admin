/**
 * Created by feichongzheng on 17/9/25.
 */
import assignUserSagas from './sagas';
import assignUserReducer from './reducer';
import view from './views/assignUser';
import {ReducerNames} from '../../constants';
const assignUserName = ReducerNames.uums.assignUser;
const reducer = {
    [assignUserName]: assignUserReducer
};

const sagas = {
    [assignUserName]: assignUserSagas
};

export {sagas, reducer, view};