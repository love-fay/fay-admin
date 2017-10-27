/**
 * Created by feichongzheng on 17/9/25.
 */
import personSagas from './sagas';
import personReducer from './reducer';
import view from './views/person';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {ReducerNames} from '../../constants';
const personName = ReducerNames.uums.person;
const authName = ReducerNames.uums.auth;

const reducer = {
    [personName]: personReducer,
    [authName]: authReducer
};

const sagas = {
    [personName]: personSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};