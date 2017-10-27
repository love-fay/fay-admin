/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {autoExpandParent: true, expandedKeys: [], searchValue: ''}, action) => {
    const {type, err, params, data, firstLoad, expandedKeys, searchValue, autoExpandParent, update} = action;
    switch (type) {
        case types.FIND_ORG_STRUCTURE_IN_TREE_FETCH: {
            return {
                ...state, type: type, update: true
            }
        }
        case types.FIND_ORG_STRUCTURE_IN_TREE_SUCCESS: {
            return {
                ...state, type: type, data: data, params: params, firstLoad: firstLoad, update: true
            }
        }
        case types.FIND_ORG_STRUCTURE_IN_TREE_ERROR: {
            return {
                ...state, type: type, err: err, params: params, update: true
            }
        }
        case types.EXPANDKEYS_FOR_ORG_STRUCTURE: {
            return {
                ...state, expandedKeys: expandedKeys, autoExpandParent: autoExpandParent, firstLoad: false, update: true
            }
        }
        case types.SEARCH_FOR_ORG_STRUCTURE: {
            return {
                ...state, expandedKeys: expandedKeys, searchValue: searchValue, autoExpandParent: autoExpandParent, firstLoad: false, update: true
            }
        }
        case types.UPDATE_RENDER_FOR_ORG_STRUCTURE: {
            return {
                ...state, update: update
            }
        }
        default: {
            return state;
        }
    }
}