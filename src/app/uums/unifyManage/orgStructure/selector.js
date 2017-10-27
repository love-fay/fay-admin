/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUnifyOrgStructure = (state) => state.uumsUnifyOrgStructure;

export const selectVisibleUnifyOrgStructure = createSelector(
    [getUumsUnifyOrgStructure],
    (uumsUnifyOrgStructure) => uumsUnifyOrgStructure
);
