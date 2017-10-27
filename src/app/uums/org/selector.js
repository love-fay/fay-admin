/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsOrg = (state) => state.uumsOrg;

export const selectVisibleOrgTreeTable = createSelector(
    [getUumsOrg],
    (uumsOrg) => uumsOrg
);
