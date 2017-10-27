/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export const changeForUnitInfo = (contentType, title) => ({
    type: types.CHANGE_FOR_UNITINFO,
    contentType: contentType,
    title: title
});