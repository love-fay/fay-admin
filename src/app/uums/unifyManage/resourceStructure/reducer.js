/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

const initState = {
    expandedKeys: [],
    searchValue: '',
    autoExpandParent: true,
    checkedKeys: [],
    parentAuthedKeys: [],
    orgStructureType: '',
    orgStructureId: '',
    checkable: false,
};

export default (state = initState, action) => {
    const {checkedKeys, type, err, params, data, firstLoad, expandedKeys, searchValue, autoExpandParent, authed, checkable} = action;
    switch (type) {
        case types.FIND_RESOURCE_STRUCTURE_IN_TREE_FETCH: {
            return {
                ...state, type: type
            }
        }
        case types.FIND_RESOURCE_STRUCTURE_IN_TREE_SUCCESS: {
            return {
                ...state, type: type, data: data, params: params, firstLoad: firstLoad
            }
        }
        case types.FIND_RESOURCE_STRUCTURE_IN_TREE_ERROR: {
            return {
                ...state, type: type, err: err, params: params
            }
        }
        case types.EXPANDKEYS_FOR_RESOURCE_STRUCTURE: {
            return {
                ...state, expandedKeys: expandedKeys, autoExpandParent: autoExpandParent, firstLoad: false
            }
        }
        case types.SEARCH_FOR_RESOURCE_STRUCTURE: {
            return {
                ...state, expandedKeys: expandedKeys, searchValue: searchValue, autoExpandParent: autoExpandParent, firstLoad: false
            }
        }
        case types.CHECKKEYS_FOR_RESOURCE_STRUCTURE: {
            return {
                ...state, checkedKeys: checkedKeys
            }
        }
        case types.FIND_AUTHED_FOR_RESOURCE_STRUCTURE_SUCCESS: {
            const {success} = authed;
            if (success) {
                const {expanded, checked, halfchecked, parentAuthedKeys} = authed.data;
                const {dataId, form} = params;
                return {
                    ...state,
                    expandedKeys: expanded,
                    checkedKeys: {checked: checked, halfChecked: halfchecked},
                    parentAuthedKeys: parentAuthedKeys,
                    checkable: true,
                    orgStructureId: dataId,
                    orgStructureType: form
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case types.CHANGECHECKABLE_FOR_RESOURCE_STRUCTURE: {
            return {
                ...state, checkable: checkable
            }
        }
        default: {
            return state;
        }
    }
}