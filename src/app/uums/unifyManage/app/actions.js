/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyApp = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_APP,
    id: id
});

export const changeActiveForUnifyApp = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_APP,
    activeKey: activeKey
});

export const findByIdForUnifyApp = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_APP,
    id: id
});

export const findByIdForUnifyAppFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_APP_FETCH,
});

export const findByIdForUnifyAppSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_APP_SUCCESS,
    res: res
});

export const findByIdForUnifyAppError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_APP_ERROR,
    err: err
});

export const showUpdatePageForUnifyApp = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_APP,
    update: update
});

export const updateForUnifyApp = (app) => ({
    type: types.UPDATE_FOR_UNIFY_APP,
    app: app
});

export const updateForUnifyAppFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_APP_FETCH,
});

export const updateForUnifyAppSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_APP_SUCCESS,
    res: res
});

export const updateForUnifyAppError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_APP_ERROR,
    updateErr: err
});
