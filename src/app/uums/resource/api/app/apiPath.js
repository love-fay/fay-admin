/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: uumsServer + apiRelativePath.findForPage,
    findById: uumsServer + apiRelativePath.findById,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    remove: uumsServer + apiRelativePath.remove,
    auth: {
        findAppForSelect: uumsServer + apiRelativePath.auth.findAppForSelect,
        findAppForAuthSelect: uumsServer + apiRelativePath.auth.findAppForAuthSelect
    }
};

export default apiPath;
