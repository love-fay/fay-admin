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
const updAvailable = (data) => request.post(apiPath.updAvailable, data);
const remove = (data) => request.post(apiPath.remove, data);
const findMenu = (data) => request.post(apiPath.auth.findMenu, data);

export {
    findInTree, findById, findForTreeSelect, save, update, remove, updAvailable, findMenu
};



