/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findForPage: uumsServer + apiRelativePath.findForPage,
    findById: uumsServer + apiRelativePath.findById,
    findByOrgForSelect: uumsServer + apiRelativePath.findByOrgForSelect,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    updAvailable: uumsServer + apiRelativePath.updAvailable,
    remove: uumsServer + apiRelativePath.remove,
    assignUser: uumsServer + apiRelativePath.assignUser,
    unAssignUser: uumsServer + apiRelativePath.unAssignUser,
    findAssignedUsers: uumsServer + apiRelativePath.findAssignedUsers,
    findUnAssignedUsers: uumsServer + apiRelativePath.findUnAssignedUsers,
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
