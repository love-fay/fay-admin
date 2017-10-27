/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/position/findForPage',
    findById: '/api/position/findById',
    save: '/api/position/add',
    update: '/api/position/update',
    updAvailable: '/api/position/updAvailable',
    findByOrgAndGroupForSelect: '/api/position/findForSelect',
    remove: '/api/position/delete',
    assignUser: '/api/position/assignUser',
    unAssignUser: '/api/position/unassignUser',
    findAssignedUsers: '/api/position/findAssignedUsers',
    findUnAssignedUsers: '/api/position/findUnassignedUsers',
    auth: {
        findMenu: '/api/position/auth/findMenu',
        findAuthedMenu: '/api/position/auth/findAuthedMenu',
        addMenu: '/api/position/auth/addMenu',
        findController: '/api/position/auth/findController',
        findAuthedController: '/api/position/auth/findAuthedController',
        addController: '/api/position/auth/addControllerResource',
        findAuthedResource: '/api/position/auth/findAuthedResource'
    }
};

export default apiRelativePath;
