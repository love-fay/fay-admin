/**
 * Created by feichongzheng on 17/9/28.
 */
const apiRelativePath = {
    findForPage: '/api/person/findForPage',
    findById: '/api/person/findById',
    save: '/api/person/add',
    update: '/api/person/update',
    auth: {
        findMenu: '/api/person/auth/findMenu',
        findAuthedMenu: '/api/person/auth/findAuthedMenu',
        addMenu: '/api/person/auth/addMenu',
        findController: '/api/person/auth/findController',
        findAuthedController: '/api/person/auth/findAuthedController',
        addController: '/api/person/auth/addControllerResource',
        findAuthedResource: '/api/person/auth/findAuthedResource'
    }
};

export default apiRelativePath;
