/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsOrgRole = (state) => state.uumsOrgRole;

export const selectVisibleOrgRolePage = createSelector(
    [getUumsOrgRole],
    (uumsOrgRole) => uumsOrgRole
);
