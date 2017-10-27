/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsAssignPerson = (state) => state.uumsAssignPerson;

export const selectVisibleAssignPersonPage = createSelector(
    [getUumsAssignPerson],
    (uumsAssignPerson) => uumsAssignPerson
);