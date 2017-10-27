/**
 * Created by feichongzheng on 17/9/30.
 */
import storage from '../../storage';
import apiRelativePath from './apiRelativePath';
const saveRight = storage.right(apiRelativePath.save);
const deleteRight = storage.right(apiRelativePath.remove);
const addMenuRight = storage.right(apiRelativePath.auth.addMenu);
const addControllerResourceRight = storage.right(apiRelativePath.auth.addControllerResource);
const resetPasswordRight = storage.right(apiRelativePath.resetPassword);
const findPrivilegeRight = storage.right(apiRelativePath.auth.findAuthedResource);

export {saveRight, deleteRight, addMenuRight, addControllerResourceRight, resetPasswordRight, findPrivilegeRight};