/**
 * Created by feichongzheng on 17/9/25.
 */
import menuSagas from './sagas';
import menuReducer from './reducer';
import view from './views/menuResource';
import {ReducerNames} from '../../../constants';
const menuName = ReducerNames.uums.unifyMenu;
const reducer = {
    [menuName]: menuReducer
};

const sagas = {
    [menuName]: menuSagas
};

export {sagas, reducer, view};