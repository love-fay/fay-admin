/**
 * Created by feichongzheng on 17/9/30.
 */
import storage from '../../storage';
import apiRelativePath from './apiRelativePath';
const saveRight = storage.right(apiRelativePath.save);
const addMenuRight = storage.right(apiRelativePath.auth.addMenu);
const addControllerResourceRight = storage.right(apiRelativePath.auth.addControllerResource);
const findPrivilegeRight = storage.right(apiRelativePath.auth.findAuthedResource);

export {saveRight, addMenuRight, addControllerResourceRight, findPrivilegeRight};