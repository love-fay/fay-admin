/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUnifyResourceStructure = (state) => state.uumsUnifyResourceStructure;

export const selectVisibleUnifyResourceStructure = createSelector(
    [getUumsUnifyResourceStructure],
    (uumsUnifyResourceStructure) => uumsUnifyResourceStructure
);
