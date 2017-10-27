/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findInTree = (data) => request.post(apiPath.findInTree, data);
const findById = (data) => request.post(apiPath.findById, data);
const findForTreeSelect = (data) => request.post(apiPath.findForTreeSelect, data);
const save = (data) => request.post(apiPath.save, data);
const update = (data) => request.post(apiPath.update, data);
const remove = (data) => request.post(apiPath.remove, data);
const updAvailable = (data) => request.post(apiPath.updAvailable, data);
const addMenu = (data) => request.post(apiPath.auth.addMenu, data);
const findMenu = (data) => request.post(apiPath.auth.findMenu, data);
const addController = (data) => request.post(apiPath.auth.addController, data);
const findController = (data) => request.post(apiPath.auth.findController, data);
const findAssignedUsers = (data) => request.post(apiPath.findAssignedUsers, data);
const findUnAssignedUsers = (data) => request.post(apiPath.findUnAssignedUsers, data);
const assignUser = (data) => request.post(apiPath.assignUser, data);
const unAssignUser = (data) => request.post(apiPath.unAssignUser, data);
const findPrivilege = (data) => request.post(apiPath.auth.findAuthedResource, data);
// request.post(apiPath.update, data);
// request.post(apiPath.remove, data);
// request.post(apiPath.auth.findAppForAuthSelect, data);

export {
    findInTree,
    findById,
    findForTreeSelect,
    save,
    update,
    remove,
    updAvailable,
    addMenu,
    findMenu,
    addController,
    findController,
    findAssignedUsers,
    findUnAssignedUsers,
    assignUser,
    unAssignUser,
    findPrivilege
};



