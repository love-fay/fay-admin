/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findResourceStructureInTree = (params, firstLoad) => ({
    type: types.FIND_RESOURCE_STRUCTURE_IN_TREE,
    params: params,
    firstLoad: firstLoad
});

export const findResourceStructureInTreeFetch = () => ({
    type: types.FIND_RESOURCE_STRUCTURE_IN_TREE_FETCH
});

export const findResourceStructureInTreeSuccess = (data, params, firstLoad) => ({
    type: types.FIND_RESOURCE_STRUCTURE_IN_TREE_SUCCESS,
    data: data,
    params: params,
    firstLoad: firstLoad
});

export const findResourceStructureInTreeError = (err, params) => ({
    type: types.FIND_RESOURCE_STRUCTURE_IN_TREE_ERROR,
    err: err,
    params: params
});

export const expandKeysForResourceStructure = (expandedKeys) => ({
    type: types.EXPANDKEYS_FOR_RESOURCE_STRUCTURE,
    expandedKeys: expandedKeys,
    autoExpandParent: false
});

export const searchForResourceStructure = (expandedKeys, searchValue, autoExpandParent) => ({
    type: types.SEARCH_FOR_RESOURCE_STRUCTURE,
    expandedKeys: expandedKeys,
    searchValue: searchValue,
    autoExpandParent: autoExpandParent
});

export const checkKeysForResourceStructure = (checkedKeys) => ({
    type: types.CHECKKEYS_FOR_RESOURCE_STRUCTURE,
    checkedKeys: checkedKeys,
});

export const findAuthedForResourceStructure = (params) => ({
    type: types.FIND_AUTHED_FOR_RESOURCE_STRUCTURE,
    params: params,
    checkable: true
});

export const findAuthedForResourceStrutureSuccess = (authed, params) => ({
    type: types.FIND_AUTHED_FOR_RESOURCE_STRUCTURE_SUCCESS,
    authed: authed,
    params: params
});

export const changeCheckableForResourceStruture = (checkable) => ({
    type: types.CHANGECHECKABLE_FOR_RESOURCE_STRUCTURE,
    checkable: checkable,
});