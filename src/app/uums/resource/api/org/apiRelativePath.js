/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findInTree: '/api/org/findInTree',
    findForTreeSelect: '/api/org/findForTreeSelect',
    findById: '/api/org/findById',
    save: '/api/org/add',
    update: '/api/org/update',
    remove: '/api/org/delete',
    updAvailable: '/api/org/updAvailable',
    assignUser: '/api/org/assignUser',
    unAssignUser: '/api/org/unassignUser',
    findAssignedUsers: '/api/org/findAssignedUsers',
    findUnAssignedUsers: '/api/org/findUnassignedUsers',
    auth: {
        findMenu: '/api/org/auth/findMenu',
        findAuthedMenu: '/api/org/auth/findAuthedMenu',
        addMenu: '/api/org/auth/addMenu',
        findController: '/api/org/auth/findController',
        findAuthedController: '/api/org/auth/findAuthedController',
        addController: '/api/org/auth/addControllerResource',
        findAuthedResource: '/api/org/auth/findAuthedResource'
    }
};

export default apiRelativePath;
