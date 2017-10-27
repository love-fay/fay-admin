/**
 * Created by feichongzheng on 17/9/28.
 */
import {uumsServer} from '../apiServer';
import apiRelativePath from './apiRelativePath';

const apiPath = {
    findInTree: uumsServer + apiRelativePath.findInTree,
    findForTreeSelect: uumsServer + apiRelativePath.findForTreeSelect,
    findById: uumsServer + apiRelativePath.findById,
    save: uumsServer + apiRelativePath.save,
    update: uumsServer + apiRelativePath.update,
    remove: uumsServer + apiRelativePath.remove,
    updAvailable: uumsServer + apiRelativePath.updAvailable,
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
