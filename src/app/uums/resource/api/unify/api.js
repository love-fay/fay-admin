/**
 * Created by feichongzheng on 17/9/28.
 */
import {request} from '../../../../resource';
import apiPath from './apiPath';

const findOrgInTree = (data) => request.post(apiPath.findOrgInTree, data);
const findResourceInTree = (data) => request.post(apiPath.findResourceInTree, data);

export {
    findOrgInTree,
    findResourceInTree
};



