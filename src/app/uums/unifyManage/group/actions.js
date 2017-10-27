/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyGroup = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_GROUP,
    id: id
});

export const changeActiveForUnifyGroup = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_GROUP,
    activeKey: activeKey
});

export const findByIdForUnifyGroup = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_GROUP,
    id: id
});

export const findByIdForUnifyGroupFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_GROUP_FETCH,
});

export const findByIdForUnifyGroupSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_GROUP_SUCCESS,
    res: res
});

export const findByIdForUnifyGroupError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_GROUP_ERROR,
    err: err
});

export const showUpdatePageForUnifyGroup = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_GROUP,
    update: update
});

export const updateForUnifyGroup = (group) => ({
    type: types.UPDATE_FOR_UNIFY_GROUP,
    group: group
});

export const updateForUnifyGroupFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_GROUP_FETCH,
});

export const updateForUnifyGroupSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_GROUP_SUCCESS,
    res: res
});

export const updateForUnifyGroupError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_GROUP_ERROR,
    updateErr: err
});