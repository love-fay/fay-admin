/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUnAssignPerson = (state) => state.uumsUnAssignPerson;

export const selectVisibleUnAssignPersonPage = createSelector(
    [getUumsUnAssignPerson],
    (uumsUnAssignPerson) => uumsUnAssignPerson
);
