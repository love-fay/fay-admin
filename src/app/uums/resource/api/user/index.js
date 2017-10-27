/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, findById, resetPassword, save, remove,
    updAvailable,
    addMenu, findMenu, addController, findController,
    findPrivilege, relationSave, relationRemove
} from './api';
import {
    saveRight, deleteRight, addMenuRight, addControllerResourceRight, resetPasswordRight,
    findPrivilegeRight
} from './right';

export {
    findForPage, findById, resetPassword, save, remove, updAvailable,
    addMenu, findMenu, addController, findController, findPrivilege, relationSave, relationRemove,
    saveRight, deleteRight, addMenuRight, addControllerResourceRight, resetPasswordRight,
    findPrivilegeRight
};