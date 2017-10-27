/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsAssignUser = (state) => state.uumsAssignUser;

export const selectVisibleAssignUserPage = createSelector(
    [getUumsAssignUser],
    (uumsAssignUser) => uumsAssignUser
);