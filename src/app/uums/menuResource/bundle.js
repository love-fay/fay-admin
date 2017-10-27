/**
 * Created by feichongzheng on 17/9/25.
 */
import menuResourceSagas from './sagas';
import menuResourceReducer from './reducer';
import view from './views/menuResource';
import {ReducerNames} from '../../constants';
const menuResourceName = ReducerNames.uums.menuResource;
const reducer = {
    [menuResourceName]: menuResourceReducer
};

const sagas = {
    [menuResourceName]: menuResourceSagas
};

export {sagas, reducer, view};