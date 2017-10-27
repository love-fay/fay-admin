/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/orgRole/findForPage',
    findById: '/api/orgRole/findById',
    save: '/api/orgRole/add',
    update: '/api/orgRole/update',
    updAvailable: '/api/orgRole/updAvailable',
    remove: '/api/orgRole/delete',
    assignUser: '/api/orgRole/assignUser',
    unAssignUser: '/api/orgRole/unassignUser',
    findAssignedUsers: '/api/orgRole/findAssignedUsers',
    findUnAssignedUsers: '/api/orgRole/findUnassignedUsers',
    auth: {
        findMenu: '/api/orgRole/auth/findMenu',
        findAuthedMenu: '/api/orgRole/auth/findAuthedMenu',
        addMenu: '/api/orgRole/auth/addMenu',
        findController: '/api/orgRole/auth/findController',
        findAuthedController: '/api/orgRole/auth/findAuthedController',
        addController: '/api/orgRole/auth/addControllerResource',
        findAuthedResource: '/api/orgRole/auth/findAuthedResource'
    }
};

export default apiRelativePath;
