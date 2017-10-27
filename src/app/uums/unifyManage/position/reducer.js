/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {activeKey: '1'}, action) => {
    const {type, id, activeKey, res, err, update, updateErr} = action;
    switch (type) {
        case types.CHANGE_ID_FOR_UNIFY_POSITION: {
            return {
                type: type, id: id, activeKey: '1'
            }
        }
        case types.CHANGE_ACTIVE_FOR_UNIFY_POSITION: {
            return {
                ...state, activeKey: activeKey
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_POSITION_FETCH: {
            return {
                ...state, type: type,
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_POSITION_SUCCESS: {
            return {
                ...state, type: type, res: res,
            }
        }
        case types.FIND_BY_ID_FOR_UNIFY_POSITION_ERROR: {
            return {
                ...state, type: type, err: err
            }
        }
        case types.SHOW_UPDATE_PAGE_FOR_UNIFY_POSITION: {
            return {
                ...state, update: update, updateType: ''
            }
        }
        case types.UPDATE_FOR_UNIFY_POSITION_FETCH: {
            return {
                ...state, updateType: type,
            }
        }
        case types.UPDATE_FOR_UNIFY_POSITION_SUCCESS: {
            return {
                ...state, updateType: type, res: res
            }
        }
        case types.UPDATE_FOR_UNIFY_POSITION_ERROR: {
            return {
                ...state, updateType: type, updateErr: updateErr
            }
        }
        default: {
            return state;
        }
    }
}