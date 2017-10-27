/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    auth: {
        find: uumsServer + apiRelativePath.auth.find,
        findAuthedResource: uumsServer + apiRelativePath.auth.findAuthedResource,
        changeAuthedResource: uumsServer + apiRelativePath.auth.changeAuthedResource
    }
};

export default apiPath;
