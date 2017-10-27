/**
 * Created by feichongzheng on 17/9/28.
 */
import cookie from 'react-cookie';

const loginUser = () => {
    return cookie.load('current-user');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'object';
};

export {loginUser, isLogin};