/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsGroup = (state) => state.uumsGroup;

export const selectVisibleGroupPage = createSelector(
    [getUumsGroup],
    (uumsGroup) => uumsGroup
);
