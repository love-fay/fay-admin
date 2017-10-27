/**
 * Created by feichongzheng on 17/9/30.
 */
import storage from '../../storage';
import apiRelativePath from './apiRelativePath';
const saveRight = storage.right(apiRelativePath.save);
const updateRight = storage.right(apiRelativePath.update);
const deleteRight = storage.right(apiRelativePath.remove);

export {saveRight, updateRight, deleteRight};