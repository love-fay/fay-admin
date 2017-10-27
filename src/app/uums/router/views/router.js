/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {connect} from 'react-redux';
import {user} from '../../../resource';
import { push } from 'react-router-redux';
import {findUumsResourceAuth, notNeedFindUumsResourceAuth} from '../actions';
import {selectVisibleUums} from '../selector';
import {NOT_NEED_FIND_UUMS_RESOURCE_AUTH, FIND_UUMS_RESOURCE_AUTH_FETCH,FIND_UUMS_RESOURCE_AUTH_SUCCESS,FIND_UUMS_RESOURCE_AUTH_ERROR} from '../actionTypes';
import {E401D3} from '../../../error';
import {UumsRouterPaths} from '../../../constants';

const UumsRouter = ({uums, pathname, children, getUumsComponent, goToLogin, auth}) => {
    const {type} = uums;
    if (user.isLogin()) {
        switch (type) {
            case NOT_NEED_FIND_UUMS_RESOURCE_AUTH:
                return <div>{children}</div>;
            case FIND_UUMS_RESOURCE_AUTH_FETCH:
                return <div>loading...</div>;
            case FIND_UUMS_RESOURCE_AUTH_SUCCESS:
                return <div>{getUumsComponent(uums, pathname, children)}</div>;
            case FIND_UUMS_RESOURCE_AUTH_ERROR:
                return <div>{uums.message}</div>;
            default:
                auth(pathname);
                return <div>无可显示内容</div>;
        }
    } else {
        goToLogin();
        return <div>需要登录</div>;
    }
};

const mapStateToProps = (state) => {
    return {
        pathname: state.router.location.pathname,
        uums: selectVisibleUums(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const getUumsComponent = (uums, pathname, children) => {
        let flag = false;
        const result = uums.data;
        const success = result.success;
        if (success) {
            const data = result.data;
            const menu = data.menu;
            const controller = data.controller.voList;
            const isControlled = data.isControlled.voList;
            window.localStorage.removeItem('controller');
            window.localStorage.removeItem('isControlled');
            window.localStorage.setItem('controller', JSON.stringify(controller));
            window.localStorage.setItem('isControlled', JSON.stringify(isControlled));
            let menuList = menu.voList;

            for (let i = 0; i < menuList.length; i++) {
                if (menuList[i].url === pathname) {
                    flag = true;
                    break;
                }
            }
            return flag ? children : <E401D3/>;
        } else {
            const errMessage = result.errMessage;
            return <div>{errMessage}</div>;
        }
    };

    const goToLogin = () => {
        dispatch(push('/login'));
    };

    const auth = (pathname) => {
        const paths = [
            UumsRouterPaths.APP,
            UumsRouterPaths.ORG,
            UumsRouterPaths.GROUP,
            UumsRouterPaths.ROLE,
            UumsRouterPaths.POSITION,
            UumsRouterPaths.USER,
            UumsRouterPaths.MENURESOURCE,
            UumsRouterPaths.CONTROLLERRESOURCE,
            UumsRouterPaths.ORGROLE,
            UumsRouterPaths.PERSON
        ];
        if (paths.indexOf(pathname) > -1) {
            dispatch(findUumsResourceAuth());
        } else{
            dispatch(notNeedFindUumsResourceAuth());
        }
    };

    return {
        getUumsComponent: getUumsComponent,
        goToLogin: goToLogin,
        auth: auth,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UumsRouter);
