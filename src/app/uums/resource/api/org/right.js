/**
 * Created by feichongzheng on 17/9/30.
 */
import storage from '../../storage';
import apiRelativePath from './apiRelativePath';
const saveRight = storage.right(apiRelativePath.save);
const updateRight = storage.right(apiRelativePath.update);
const deleteRight = storage.right(apiRelativePath.remove);
const addMenuRight = storage.right(apiRelativePath.auth.addMenu);
const addControllerResourceRight = storage.right(apiRelativePath.auth.addControllerResource);
const assignUserRight = storage.right(apiRelativePath.assignUser);
const unAssignUserRight = storage.right(apiRelativePath.unassignUser);
const findPrivilegeRight = storage.right(apiRelativePath.auth.findAuthedResource);

export {saveRight, updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight};