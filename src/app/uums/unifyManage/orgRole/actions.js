/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyOrgRole = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_ORG_ROLE,
    id: id
});

export const changeActiveForUnifyOrgRole = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_ORG_ROLE,
    activeKey: activeKey
});

export const findByIdForUnifyOrgRole = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_ROLE,
    id: id
});

export const findByIdForUnifyOrgRoleFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_ROLE_FETCH,
});

export const findByIdForUnifyOrgRoleSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_ROLE_SUCCESS,
    res: res
});

export const findByIdForUnifyOrgRoleError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_ORG_ROLE_ERROR,
    err: err
});

export const showUpdatePageForUnifyOrgRole = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_ORG_ROLE,
    update: update
});

export const updateForUnifyOrgRole = (orgRole) => ({
    type: types.UPDATE_FOR_UNIFY_ORG_ROLE,
    orgRole: orgRole
});

export const updateForUnifyOrgRoleFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_ORG_ROLE_FETCH,
});

export const updateForUnifyOrgRoleSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_ORG_ROLE_SUCCESS,
    res: res
});

export const updateForUnifyOrgRoleError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_ORG_ROLE_ERROR,
    updateErr: err
});