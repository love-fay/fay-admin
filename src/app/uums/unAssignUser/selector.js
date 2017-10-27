/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUnAssignUser = (state) => state.uumsUnAssignUser;

export const selectVisibleUnAssignUserPage = createSelector(
    [getUumsUnAssignUser],
    (uumsUnAssignUser) => uumsUnAssignUser
);
