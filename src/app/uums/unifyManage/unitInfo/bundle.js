/**
 * Created by feichongzheng on 17/9/25.
 */
import unitInfoReducer from './reducer';
import view from './views/unitInfo';
import {ReducerNames} from '../../../constants';
const unitInfoName = ReducerNames.uums.unifyUnitInfo;
const reducer = {
    [unitInfoName]: unitInfoReducer
};

export {reducer, view};