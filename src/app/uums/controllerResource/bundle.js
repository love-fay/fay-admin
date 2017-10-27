/**
 * Created by feichongzheng on 17/9/25.
 */
import controllerResourceSagas from './sagas';
import controllerResourceReducer from './reducer';
import view from './views/controllerResource';
import {ReducerNames} from '../../constants';
const controllerResourceName = ReducerNames.uums.controllerResource;
const reducer = {
    [controllerResourceName]: controllerResourceReducer
};

const sagas = {
    [controllerResourceName]: controllerResourceSagas
};

export {sagas, reducer, view};