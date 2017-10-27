/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/user/findForPage',
    findById: '/api/user/findById',
    resetPassword: '/api/user/resetPassword',
    save: '/api/user/add',
    updAvailable: '/api/user/updAvailable',
    remove: '/api/user/delete',
    relation: {
        add: '/api/user/relation/add',
        remove: '/api/user/relation/remove'
    },
    auth: {
        findMenu: '/api/user/auth/findMenu',
        findAuthedMenu: '/api/user/auth/findAuthedMenu',
        addMenu: '/api/user/auth/addMenu',
        findController: '/api/user/auth/findController',
        findAuthedController: '/api/user/auth/findAuthedController',
        addController: '/api/user/auth/addControllerResource',
        findAuthedResource: '/api/user/auth/findAuthedResource'
    }
};

export default apiRelativePath;
