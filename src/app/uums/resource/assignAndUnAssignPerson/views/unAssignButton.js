/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {actions as assignPersonActions} from '../../../assignPerson';
import {actions as unAssignPersonActions} from '../../../unassignPerson';
import Button from 'antd/lib/button';
import 'FayAntd/button/style/index.js';
import {org, group, position, orgRole} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';

const getUnAssignUserRight = (type) => {
    switch (type) {
        case FilterType.ORG:
            return org.unAssignUserRight;
        case FilterType.GROUP:
            return group.unAssignUserRight;
        case FilterType.POSITION:
            return position.unAssignUserRight;
        case FilterType.ORGROLE:
            return orgRole.unAssignUserRight;
        default:
            return false;
    }
};

const UnAssignButton = ({type, uumsAssignPerson, uumsUnAssignPerson, unassignUser}) => {
    if (getUnAssignUserRight(type)) {
        return (
            <Button type="primary" shape="circle" icon="forward" onClick={() => unassignUser(uumsAssignPerson, uumsUnAssignPerson)} />
        )
    } else {
        return <div></div>;
    }
};

const mapStateToProps = (state) => {
    const {uumsAssignPerson, uumsUnAssignPerson} = state;
    return {
        uumsAssignPerson: uumsAssignPerson,
        uumsUnAssignPerson: uumsUnAssignPerson
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const refresh = (assignParams, unAssignParams) => {
        const {type} = ownProps;
        dispatch(assignPersonActions.findAssignPersonForPage(type, assignParams));
        dispatch(unAssignPersonActions.findUnAssignPersonForPage(type, unAssignParams));
    };

    const unassignUser = (uumsAssignPerson, uumsUnAssignPerson) => {
        const {type, dataId} = ownProps;
        const {selectedRowKeys} = uumsAssignPerson;
        if (selectedRowKeys && selectedRowKeys.length > 0) {
            const params = {dataId: dataId, userIds: selectedRowKeys};
            let promise;
            switch (type) {
                case FilterType.ORG:
                    promise = org.unAssignUser(params);
                    break;
                case FilterType.GROUP:
                    promise = group.unAssignUser(params);
                    break;
                case FilterType.POSITION:
                    promise = position.unAssignUser(params);
                    break;
                case FilterType.ORGROLE:
                    promise = orgRole.unAssignUser(params);
                    break;
                default:
                    break;
            }
            promise.then(() => {
                refresh(uumsAssignPerson.params, uumsUnAssignPerson.params);
            });
        }
    };
    return {
        unassignUser: unassignUser
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UnAssignButton);
