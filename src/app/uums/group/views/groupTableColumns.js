/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import GroupUpdateForm from './groupUpdateForm';
import {api, ADelete, AvailableSwitch, AssignAndUnAssignPerson, Privilege, AModal} from '../../resource';
import {view as Auth} from '../../resource/auth';
const {updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} = api.group;
import {FilterType} from '../../constants';
const type = FilterType.GROUP;

export default (refresh) => {
    return [{
        title: '名称',
        dataIndex: 'name',
    }, {
        title: '所属机构',
        dataIndex: 'orgName',
    }, {
        title: '是否可用',
        render: (text, record) => (
            <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>
        ),
    }, {
        title: '操作',
        render: (text, record) => {
            const assignTitle = '为部门【' + record.name + '】分配人员';
            const authTitle = '授予部门【' + record.name + '】权限';
            return (
                <span>
                    {
                        (addMenuRight || addControllerResourceRight) &&
                        <span>
                            <AModal title={authTitle} text="授权" width="600px">
                                <Auth type={type} dataId={record.id}/>
                            </AModal>
                            {(assignUserRight || unAssignUserRight || updateRight || findPrivilegeRight || deleteRight) && <span className="ant-divider" />}
                        </span>

                    }
                    {
                        (assignUserRight || unAssignUserRight) &&
                        <span>
                            <AModal title={assignTitle} text="分配人员" width="80%">
                                <AssignAndUnAssignPerson type={type} dataId={record.id}/>
                            </AModal>
                            {(updateRight || findPrivilegeRight || deleteRight) && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        updateRight &&
                        <span>
                            <AModal title="修改组织" text="修改">
                                <GroupUpdateForm cb={() => {refresh();}} data={record}/>
                            </AModal>
                            {(findPrivilegeRight || deleteRight) && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        findPrivilegeRight &&
                        <span>
                            <AModal title="权限" text="查看权限" width="600px">
                                <Privilege id={record.id} type={type}/>
                            </AModal>
                            {deleteRight && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        deleteRight &&
                        <ADelete dataId={record.id} type={type} cb={() => {refresh();}}/>
                    }
                </span>
            );
        },
    }];
}