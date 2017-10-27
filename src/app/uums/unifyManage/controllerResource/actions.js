/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyController = (id) => ({
    type: types.CHANGE_ID_FOR_UNIFY_CONTROLLER,
    id: id
});

export const findByIdForUnifyController = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_CONTROLLER,
    id: id
});

export const findByIdForUnifyControllerFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_FETCH,
});

export const findByIdForUnifyControllerSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_SUCCESS,
    res: res
});

export const findByIdForUnifyControllerError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_CONTROLLER_ERROR,
    err: err
});

export const showUpdatePageForUnifyController = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_CONTROLLER,
    update: update
});

export const updateForUnifyController = (controller) => ({
    type: types.UPDATE_FOR_UNIFY_CONTROLLER,
    controller: controller
});

export const updateForUnifyControllerFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_CONTROLLER_FETCH,
});

export const updateForUnifyControllerSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_CONTROLLER_SUCCESS,
    res: res
});

export const updateForUnifyControllerError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_CONTROLLER_ERROR,
    updateErr: err
});
