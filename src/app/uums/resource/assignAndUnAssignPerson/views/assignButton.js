/**
 * Created by feichongzheng on 17/10/26.
 */
import React from 'react';
import {actions as assignPersonActions} from '../../../assignPerson';
import style from './style.css';
import {actions as unAssignPersonActions} from '../../../unassignPerson';
import Button from 'antd/lib/button';
import 'FayAntd/button/style/index.js';
import {org, group, position, orgRole} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';

const getAssignUserRight = (type) => {
    switch (type) {
        case FilterType.ORG:
            return org.assignUserRight;
        case FilterType.GROUP:
            return group.assignUserRight;
        case FilterType.POSITION:
            return position.assignUserRight;
        case FilterType.ORGROLE:
            return orgRole.assignUserRight;
        default:
            return false;
    }
};

const AssignButton = ({type, uumsAssignPerson, uumsUnAssignPerson, assignUser}) => {
    if (getAssignUserRight(type)) {
        return (
            <div className={style.backwardIconDiv}>
                <Button type="primary" shape="circle" icon="backward" onClick={() => assignUser(uumsAssignPerson, uumsUnAssignPerson)} />
            </div>
        )
    } else{
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

    const assignUser = (uumsAssignPerson, uumsUnAssignPerson) => {
        const {type, dataId} = ownProps;
        const {selectedRowKeys} = uumsUnAssignPerson;
        if (selectedRowKeys && selectedRowKeys.length > 0) {
            const params = {dataId: dataId, userIds: selectedRowKeys};
            let promise;
            switch (type) {
                case FilterType.ORG:
                    promise = org.assignUser(params);
                    break;
                case FilterType.GROUP:
                    promise = group.assignUser(params);
                    break;
                case FilterType.POSITION:
                    promise = position.assignUser(params);
                    break;
                case FilterType.ORGROLE:
                    promise = orgRole.assignUser(params);
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
        assignUser: assignUser,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignButton);
