/**
 * Created by feichongzheng on 17/9/25.
 */
import orgStructureSagas from './sagas';
import orgStructureReducer from './reducer';
import view from './views/orgStructure';
import {ReducerNames} from '../../../constants';
const orgStructureName = ReducerNames.uums.unifyOrgStructure;
const reducer = {
    [orgStructureName]: orgStructureReducer
};

const sagas = {
    [orgStructureName]: orgStructureSagas
};

export {sagas, reducer, view};