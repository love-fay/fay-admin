/**
 * Created by feichongzheng on 17/9/30.
 */
import {
    findForPage, save, update, remove,
    updAvailable, assignUser, unAssignUser,
    addMenu, findMenu, addController, findController,
    findPrivilege, findAssignedUsers, findUnAssignedUsers
} from './api';
import {saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} from './right';

export {
    findForPage, save, update, remove, updAvailable, assignUser, unAssignUser,
    addMenu, findMenu, addController, findController, findPrivilege, findAssignedUsers, findUnAssignedUsers,
    saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight
};