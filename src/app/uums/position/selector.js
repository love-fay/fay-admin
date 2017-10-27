/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsPosition = (state) => state.uumsPosition;

export const selectVisiblePositionPage = createSelector(
    [getUumsPosition],
    (uumsPosition) => uumsPosition
);
