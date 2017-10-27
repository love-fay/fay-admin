/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyOrg = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_ORG,
    id: id
});

export const changeActiveForUnifyOrg = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_ORG,
    activeKey: activeKey
});

export const findByIdForUnifyOrg = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG,
    id: id
});

export const findByIdForUnifyOrgFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_FETCH,
});

export const findByIdForUnifyOrgSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_SUCCESS,
    res: res
});

export const findByIdForUnifyOrgError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_ERROR,
    err: err
});

export const showUpdatePageForUnifyOrg = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_ORG,
    update: update
});

export const updateForUnifyOrg = (org) => ({
    type: types.UPDATE_FOR_UNIFY_ORG,
    org: org
});

export const updateForUnifyOrgFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_ORG_FETCH,
});

export const updateForUnifyOrgSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_ORG_SUCCESS,
    res: res
});

export const updateForUnifyOrgError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_ORG_ERROR,
    updateErr: err
});