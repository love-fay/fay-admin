/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: uumsServer + apiRelativePath.findForPage,
    findById: uumsServer + apiRelativePath.findById,
    resetPassword: uumsServer + apiRelativePath.resetPassword,
    save: uumsServer + apiRelativePath.save,
    updAvailable: uumsServer + apiRelativePath.updAvailable,
    remove: uumsServer + apiRelativePath.remove,
    relation: {
        add: uumsServer + apiRelativePath.relation.add,
        remove: uumsServer + apiRelativePath.relation.remove
    },
    auth: {
        findMenu: uumsServer + apiRelativePath.auth.findMenu,
        findAuthedMenu: uumsServer + apiRelativePath.auth.findAuthedMenu,
        addMenu: uumsServer + apiRelativePath.auth.addMenu,
        findController: uumsServer + apiRelativePath.auth.findController,
        findAuthedController: uumsServer + apiRelativePath.auth.findAuthedController,
        addController: uumsServer + apiRelativePath.auth.addController,
        findAuthedResource: uumsServer + apiRelativePath.auth.findAuthedResource
    }
};

export default apiPath;
