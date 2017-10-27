/**
 * Created by feichongzheng on 17/9/25.
 */
import * as types from './actionTypes';

const initState = {
    appId: null,
    menuId: undefined,
    menuExpandedKeys: [],
    menuAutoExpandParent: true,
    menuCheckedKeys: [],
    menuSelectedKeys: [],
    menuDataSource: [],
    controllerExpandedKeys: [],
    controllerAutoExpandParent: true,
    controllerCheckedKeys: [],
    controllerSelectedKeys: [],
    controllerDataSource: [],
};

export default (state = initState, action) => {
    const {type, appId, dataType, dataId, menuId, expandedKeys, checkedKeys, selectedKeys, res, err} = action;
    switch (type) {
        case types.CHANGE_APP_FOR_AUTH: {
            return {
                ...initState, type: type, appId: appId
            }
        }
        case types.CHANGE_MENU_FOR_AUTH: {
            return {
                ...state, menuId: menuId
            }
        }
        case types.EXPAND_MENU_FOR_AUTH: {
            return {
                ...state, menuExpandedKeys: expandedKeys, menuAutoExpandParent: false
            }
        }
        case types.CHECK_MENU_FOR_AUTH: {
            return {
                ...state, menuCheckedKeys: checkedKeys
            }
        }
        case types.SELECT_MENU_FOR_AUTH: {
            return {
                ...state, menuSelectedKeys: selectedKeys
            }
        }
        case types.EXPAND_CONTROLLER_FOR_AUTH: {
            return {
                ...state, controllerExpandedKeys: expandedKeys, controllerAutoExpandParent: false
            }
        }
        case types.CHECK_CONTROLLER_FOR_AUTH: {
            return {
                ...state, controllerCheckedKeys: checkedKeys
            }
        }
        case types.SELECT_CONTROLLER_FOR_AUTH: {
            return {
                ...state, controllerSelectedKeys: selectedKeys
            }
        }
        case types.FIND_MENU_FOR_AUTH_FETCH: {
            return {
                ...state, menuType: type
            }
        }
        case types.FIND_MENU_FOR_AUTH_SUCCESS: {
            if (res.success) {
                const {menuList, checkedList} = res.data;
                return {
                    ...state, menuType: type, menuSuccess: true, menuDataSource: menuList, menuCheckedKeys: checkedList
                }
            } else {
                return {
                    ...state, menuType: type, menuSuccess: false, menuErr: res.errMessage
                }
            }
        }
        case types.FIND_MENU_FOR_AUTH_ERROR: {
            return {
                ...state, menuType: type, menuErr: err
            }
        }
        case types.FIND_CONTROLLER_FOR_AUTH_FETCH: {
            return {
                ...state, controllerType: type
            }
        }
        case types.FIND_CONTROLLER_FOR_AUTH_SUCCESS: {
            if (res.success) {
                const {controllerList, checkedList} = res.data;
                return {
                    ...state, controllerType: type, controllerSuccess: true, controllerDataSource: controllerList, controllerCheckedKeys: checkedList
                }
            } else {
                return {
                    ...state, controllerType: type, controllerSuccess: false, controllerErr: res.errMessage
                }
            }
        }
        case types.FIND_CONTROLLER_FOR_AUTH_ERROR: {
            return {
                ...state, controllerType: type, controllerErr: err
            }
        }
        default: {
            return state;
        }
    }
}