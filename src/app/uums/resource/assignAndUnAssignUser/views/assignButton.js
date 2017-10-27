/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {actions as assignUserActions} from '../../../assignUser';
import style from './style.css';
import {actions as unAssignUserActions} from '../../../unAssignUser';
import Button from 'antd/lib/button';
import 'FayAntd/button/style/index.js';
import {role} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';

const getAssignUserRight = (type) => {
    switch (type) {
        case FilterType.ROLE:
            return role.assignUserRight;
        default:
            return false;
    }
};

const AssignButton = ({type, uumsAssignUser, uumsUnAssignUser, assignUser}) => {
    if (getAssignUserRight(type)) {
        return (
            <div className={style.backwardIconDiv}>
                <Button type="primary" shape="circle" icon="backward" onClick={() => assignUser(uumsAssignUser, uumsUnAssignUser)} />
            </div>
        )
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state) => {
    const {uumsAssignUser, uumsUnAssignUser} = state;
    return {
        uumsAssignUser: uumsAssignUser,
        uumsUnAssignUser: uumsUnAssignUser
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const refresh = (assignParams, unAssignParams) => {
        const {type} = ownProps;
        dispatch(assignUserActions.findAssignUserForPage(type, assignParams));
        dispatch(unAssignUserActions.findUnAssignUserForPage(type, unAssignParams));
    };

    const assignUser = (uumsAssignUser, uumsUnAssignUser) => {
        const {type, dataId} = ownProps;
        const {selectedRowKeys} = uumsUnAssignUser;
        if (selectedRowKeys && selectedRowKeys.length > 0) {
            const params = {dataId: dataId, userIds: selectedRowKeys};
            let promise;
            switch (type) {
                case FilterType.ROLE:
                    promise = role.assignUser(params);
                    break;
                default:
                    break;
            }
            promise.then(() => {
                refresh(uumsAssignUser.params, uumsUnAssignUser.params);
            });
        }
    };

    return {
        assignUser: assignUser,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignButton);
