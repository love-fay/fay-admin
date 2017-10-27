/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsMenuResource = (state) => state.uumsMenuResource;

export const selectVisibleMenuResourceTreeTable = createSelector(
    [getUumsMenuResource],
    (uumsMenuResource) => uumsMenuResource
);
