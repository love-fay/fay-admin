/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyMenu = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_MENU,
    id: id
});

export const changeActiveForUnifyMenu = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_MENU,
    activeKey: activeKey
});

export const findByIdForUnifyMenu = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_MENU,
    id: id
});

export const findByIdForUnifyMenuFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_MENU_FETCH,
});

export const findByIdForUnifyMenuSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_MENU_SUCCESS,
    res: res
});

export const findByIdForUnifyMenuError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_MENU_ERROR,
    err: err
});

export const showUpdatePageForUnifyMenu = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_MENU,
    update: update
});

export const updateForUnifyMenu = (menu) => ({
    type: types.UPDATE_FOR_UNIFY_MENU,
    menu: menu
});

export const updateForUnifyMenuFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_MENU_FETCH,
});

export const updateForUnifyMenuSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_MENU_SUCCESS,
    res: res
});

export const updateForUnifyMenuError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_MENU_ERROR,
    updateErr: err
});