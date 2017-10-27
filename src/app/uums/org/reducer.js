/**
 * Created by feichongzheng on 17/9/25.
 */
import {FIND_ORG_FOR_TREE_TABLE_FETCH, FIND_ORG_FOR_TREE_TABLE_SUCCESS, FIND_ORG_FOR_TREE_TABLE_ERROR, EXPAND_ORG_FOR_TREE_TABLE} from './actionTypes';

export default (state = {}, action) => {
    const {type} = action;
    switch (type) {
        case FIND_ORG_FOR_TREE_TABLE_FETCH: {
            return {
                type: type, expandedRowKeys: []
            }
        }
        case FIND_ORG_FOR_TREE_TABLE_SUCCESS: {
            return {
                type: type, data: action.data, params: action.params, expandedRowKeys: action.expandedRowKeys
            }
        }
        case FIND_ORG_FOR_TREE_TABLE_ERROR: {
            return {
                type: type, err: action.err, params: action.params, expandedRowKeys: []
            }
        }
        case EXPAND_ORG_FOR_TREE_TABLE: {
            return Object.assign({}, state, {
                expandedRowKeys: action.expandedRowKeys
            });
        }
        default: {
            return state;
        }
    }
}