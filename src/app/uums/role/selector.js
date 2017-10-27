/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsRole = (state) => state.uumsRole;

export const selectVisibleRolePage = createSelector(
    [getUumsRole],
    (uumsRole) => uumsRole
);
