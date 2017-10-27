/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsControllerResource = (state) => state.uumsControllerResource;

export const selectVisibleControllerResourceTreeTable = createSelector(
    [getUumsControllerResource],
    (uumsControllerResource) => uumsControllerResource
);
