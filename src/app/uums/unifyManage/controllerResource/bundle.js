/**
 * Created by feichongzheng on 17/9/25.
 */
import controllerSagas from './sagas';
import controllerReducer from './reducer';
import view from './views/controllerResource';
import {ReducerNames} from '../../../constants';
const controllerName = ReducerNames.uums.unifyController;
const reducer = {
    [controllerName]: controllerReducer
};

const sagas = {
    [controllerName]: controllerSagas
};

export {sagas, reducer, view};