/**
 * Created by feichongzheng on 17/9/25.
 */
import personSagas from './sagas';
import personReducer from './reducer';
import view from './views/person';
import {ReducerNames} from '../../../constants';
const personName = ReducerNames.uums.unifyPerson;
const reducer = {
    [personName]: personReducer
};

const sagas = {
    [personName]: personSagas
};

export {sagas, reducer, view};