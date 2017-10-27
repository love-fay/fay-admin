/**
 * Created by feichongzheng on 17/9/26.
 */
import {createSelector} from 'reselect';

const getUumsUnifyUnitInfo = (state) => state.uumsUnifyUnitInfo;

export const selectVisibleUnitInfoPage = createSelector(
    [getUumsUnifyUnitInfo],
    (uumsUnifyUnitInfo) => uumsUnifyUnitInfo
);
