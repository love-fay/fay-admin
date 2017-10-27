/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsPerson = (state) => state.uumsPerson;

export const selectVisiblePersonPage = createSelector(
    [getUumsPerson],
    (uumsPerson) => uumsPerson
);
