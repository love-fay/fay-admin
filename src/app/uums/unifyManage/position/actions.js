/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyPosition = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_POSITION,
    id: id
});

export const changeActiveForUnifyPosition = (activeKey) => ({
    type: types.CHANGE_ACTIVE_FOR_UNIFY_POSITION,
    activeKey: activeKey
});

export const findByIdForUnifyPosition = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_POSITION,
    id: id
});

export const findByIdForUnifyPositionFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_POSITION_FETCH,
});

export const findByIdForUnifyPositionSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_POSITION_SUCCESS,
    res: res
});

export const findByIdForUnifyPositionError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_POSITION_ERROR,
    err: err
});

export const showUpdatePageForUnifyPosition = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_POSITION,
    update: update
});

export const updateForUnifyPosition = (position) => ({
    type: types.UPDATE_FOR_UNIFY_POSITION,
    position: position
});

export const updateForUnifyPositionFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_POSITION_FETCH,
});

export const updateForUnifyPositionSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_POSITION_SUCCESS,
    res: res
});

export const updateForUnifyPositionError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_POSITION_ERROR,
    updateErr: err
});
