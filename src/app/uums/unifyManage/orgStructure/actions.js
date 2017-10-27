/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const findOrgStructureInTree = (params, firstLoad) => ({
    type: types.FIND_ORG_STRUCTURE_IN_TREE,
    params: params,
    firstLoad: firstLoad
});

export const findOrgStructureInTreeFetch = () => ({
    type: types.FIND_ORG_STRUCTURE_IN_TREE_FETCH
});

export const findOrgStructureInTreeSuccess = (data, params, firstLoad) => ({
    type: types.FIND_ORG_STRUCTURE_IN_TREE_SUCCESS,
    data: data,
    params: params,
    firstLoad: firstLoad
});

export const findOrgStructureInTreeError = (err, params) => ({
    type: types.FIND_ORG_STRUCTURE_IN_TREE_ERROR,
    err: err,
    params: params
});

export const expandKeysForOrgStructure = (expandedKeys) => ({
    type: types.EXPANDKEYS_FOR_ORG_STRUCTURE,
    expandedKeys: expandedKeys,
    autoExpandParent: false
});

export const searchForOrgStructure = (expandedKeys, searchValue, autoExpandParent) => ({
    type: types.SEARCH_FOR_ORG_STRUCTURE,
    expandedKeys: expandedKeys,
    searchValue: searchValue,
    autoExpandParent: autoExpandParent
});

export const updateRenderForOrgStructure = (update) => ({
    type: types.UPDATE_RENDER_FOR_ORG_STRUCTURE,
    update: update,
});