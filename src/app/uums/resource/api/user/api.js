/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const findById = (data) => request.post(apiPath.findById, data);
const resetPassword = (data) => request.post(apiPath.resetPassword, data);
const save = (data) => request.post(apiPath.save, data);
const updAvailable = (data) => request.post(apiPath.updAvailable, data);
const remove = (data) => request.post(apiPath.remove, data);
const findMenu = (data) => request.post(apiPath.auth.findMenu, data);
const addMenu = (data) => request.post(apiPath.auth.addMenu, data);
const findController = (data) => request.post(apiPath.auth.findController, data);
const findAuthedController = (data) => request.post(apiPath.auth.findAuthedController, data);
const addController = (data) => request.post(apiPath.auth.addController, data);
const findPrivilege = (data) => request.post(apiPath.auth.findAuthedResource, data);
const relationSave = (data) => request.post(apiPath.relation.add, data);
const relationRemove = (data) => request.post(apiPath.relation.remove, data);

export {
    findForPage, findById, resetPassword, save, remove, updAvailable,
    addMenu, findMenu, addController, findController, findPrivilege, relationSave, relationRemove
};



