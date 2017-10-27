/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findForPage = (data) => request.post(apiPath.findForPage, data);
const findById = (data) => request.post(apiPath.findById, data);
const save = (data) => request.post(apiPath.save, data);
const update = (data) => request.post(apiPath.update, data);
const remove = (data) => request.post(apiPath.remove, data);
const findAppForSelect = (data) => request.post(apiPath.auth.findAppForSelect, data);
const findAppForAuthSelect = (data) => request.post(apiPath.auth.findAppForAuthSelect, data);
// request.post(apiPath.update, data);
// request.post(apiPath.remove, data);
// request.post(apiPath.auth.findAppForAuthSelect, data);

export {findForPage, findById, save, update, remove, findAppForSelect, findAppForAuthSelect};



