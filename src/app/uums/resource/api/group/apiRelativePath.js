/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/group/findForPage',
    findById: '/api/group/findById',
    findByOrgForSelect: '/api/group/findByOrgForSelect',
    save: '/api/group/add',
    update: '/api/group/update',
    updAvailable: '/api/group/updAvailable',
    remove: '/api/group/delete',
    assignUser: '/api/group/assignUser',
    unAssignUser: '/api/group/unassignUser',
    findAssignedUsers: '/api/group/findAssignedUsers',
    findUnAssignedUsers: '/api/group/findUnassignedUsers',
    auth: {
        findMenu: '/api/group/auth/findMenu',
        findAuthedMenu: '/api/group/auth/findAuthedMenu',
        addMenu: '/api/group/auth/addMenu',
        findController: '/api/group/auth/findController',
        findAuthedController: '/api/group/auth/findAuthedController',
        addController: '/api/group/auth/addControllerResource',
        findAuthedResource: '/api/group/auth/findAuthedResource'
    }
};

export default apiRelativePath;
