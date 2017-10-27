/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findInTree = (data) => request.post(apiPath.findInTree, data);
const findById = (data) => request.post(apiPath.findById, data);
const save = (data) => request.post(apiPath.save, data);
const update = (data) => request.post(apiPath.update, data);
const updAvailable = (data) => request.post(apiPath.updAvailable, data);
const remove = (data) => request.post(apiPath.remove, data);

export {
    findInTree, findById, save, update, remove, updAvailable
};



