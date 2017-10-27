/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeIdForUnifyPerson = (id, parentType, parentId) => ({
    type: types.CHANGE_ID_FOR_UNIFY_PERSON,
    id: id,
    parentType: parentType,
    parentId: parentId
});

export const findByIdForUnifyPerson = (id) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_PERSON,
    id: id
});

export const findByIdForUnifyPersonFetch = () => ({
    type: types.FIND_BY_ID_FOR_UNIFY_PERSON_FETCH,
});

export const findByIdForUnifyPersonSuccess = (res) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_PERSON_SUCCESS,
    res: res
});

export const findByIdForUnifyPersonError = (err) => ({
    type: types.FIND_BY_ID_FOR_UNIFY_PERSON_ERROR,
    err: err
});

export const showUpdatePageForUnifyPerson = (update) => ({
    type: types.SHOW_UPDATE_PAGE_FOR_UNIFY_PERSON,
    update: update
});

export const updateForUnifyPerson = (person) => ({
    type: types.UPDATE_FOR_UNIFY_PERSON,
    person: person
});

export const updateForUnifyPersonFetch = () => ({
    type: types.UPDATE_FOR_UNIFY_PERSON_FETCH,
});

export const updateForUnifyPersonSuccess = (res) => ({
    type: types.UPDATE_FOR_UNIFY_PERSON_SUCCESS,
    res: res
});

export const updateForUnifyPersonError = (err) => ({
    type: types.UPDATE_FOR_UNIFY_PERSON_ERROR,
    updateErr: err
});