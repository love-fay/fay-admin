/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/role/findForPage',
    findById: '/api/role/findById',
    save: '/api/role/add',
    update: '/api/role/update',
    updAvailable: '/api/role/updAvailable',
    remove: '/api/role/delete',
    assignUser: '/api/role/assignUser',
    unAssignUser: '/api/role/unassignUser',
    findAssignedUsers: '/api/role/findAssignedUsers',
    findUnAssignedUsers: '/api/role/findUnassignedUsers',
    auth: {
        findMenu: '/api/role/auth/findMenu',
        findAuthedMenu: '/api/role/auth/findAuthedMenu',
        addMenu: '/api/role/auth/addMenu',
        findController: '/api/role/auth/findController',
        findAuthedController: '/api/role/auth/findAuthedController',
        addController: '/api/role/auth/addControllerResource',
        findAuthedResource: '/api/role/auth/findAuthedResource'
    }
};

export default apiRelativePath;
