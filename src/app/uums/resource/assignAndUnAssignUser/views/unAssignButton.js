/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {actions as assignUserActions} from '../../../assignUser';
import {actions as unAssignUserActions} from '../../../unAssignUser';
import Button from 'antd/lib/button';
import 'FayAntd/button/style/index.js';
import {role} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';

const getUnAssignUserRight = (type) => {
    switch (type) {
        case FilterType.ROLE:
            return role.unAssignUserRight;
        default:
            return false;
    }
};

const UnAssignButton = ({type, uumsAssignUser, uumsUnAssignUser, unassignUser}) => {

    if (getUnAssignUserRight(type)) {
        return <Button type="primary" shape="circle" icon="forward" onClick={() => unassignUser(uumsAssignUser, uumsUnAssignUser)} />;
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

    const unassignUser = (uumsAssignUser, uumsUnAssignUser) => {
        const {type, dataId} = ownProps;
        const {selectedRowKeys} = uumsAssignUser;
        if (selectedRowKeys && selectedRowKeys.length > 0) {
            const params = {dataId: dataId, userIds: selectedRowKeys};
            let promise;
            switch (type) {
                case FilterType.ROLE:
                    promise = role.unAssignUser(params);
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
        unassignUser: unassignUser
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UnAssignButton);
