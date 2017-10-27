/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findOrgInTree: uumsServer + apiRelativePath.findOrgInTree,
    findResourceInTree: uumsServer + apiRelativePath.findResourceInTree
};

export default apiPath;
