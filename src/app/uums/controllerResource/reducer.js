/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_FETCH: {
            return {
                type: type, expandedRowKeys: []
            }
        }
        case types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_SUCCESS: {
            return {
                type: type, data: action.data, params: action.params, expandedRowKeys: action.expandedRowKeys
            }
        }
        case types.FIND_CONTROLLERRESOURCE_FOR_TREE_TABLE_ERROR: {
            return {
                type: type, err: action.err, params: action.params, expandedRowKeys: []
            }
        }
        case types.EXPAND_CONTROLLERRESOURCE_FOR_TREE_TABLE: {
            return Object.assign({}, state, {
                expandedRowKeys: action.expandedRowKeys
            });
        }
        default: {
            return state;
        }
    }
}