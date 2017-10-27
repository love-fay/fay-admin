/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

const initState = {
    res: null,
    update: false,
};

export default (state = initState, action) => {
    const {type, id, res, err, update, updateErr} = action;
    switch (type) {
        case types.CHANGE_ID_FOR_UNIFY_CONTROLLER: {
            return {
                type: type, id: id
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_FETCH: {
            return {
                ...state, type: type,
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_SUCCESS: {
            return {
                ...state, type: type, res: res,
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_ERROR: {
            return {
                ...state, type: type, err: err
            }
        }
        case types.SHOW_UPDATE_PAGE_FOR_UNIFY_CONTROLLER: {
            return {
                ...state, update: update, updateType: ''
            }
        }
        case types.UPDATE_FOR_UNIFY_CONTROLLER_FETCH: {
            return {
                ...state, updateType: type,
            }
        }
        case types.UPDATE_FOR_UNIFY_CONTROLLER_SUCCESS: {
            return {
                ...state, updateType: type, res: res
            }
        }
        case types.UPDATE_FOR_UNIFY_CONTROLLER_ERROR: {
            return {
                ...state, updateType: type, updateErr: updateErr
            }
        }
        default: {
            return state;
        }
    }
}