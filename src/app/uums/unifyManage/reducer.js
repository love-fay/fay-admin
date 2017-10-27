/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

export default (state = {}, action) => {
    const {type, from} = action;
    switch (type) {
        case types.UNIFY_MANAGE_ORDER: {
            return {
                type: type, from: from
            }
        }
        default: {
            return state;
        }
    }
}