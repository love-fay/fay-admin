/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, findById, save, remove, update,
    addMenu, findMenu, addController, findController,
    findPrivilege
} from './api';
import {
    saveRight, addMenuRight, addControllerResourceRight,
    findPrivilegeRight
} from './right';

export {
    findForPage, findById, save, remove, update,
    addMenu, findMenu, addController, findController, findPrivilege,
    saveRight, addMenuRight, addControllerResourceRight,
    findPrivilegeRight
};