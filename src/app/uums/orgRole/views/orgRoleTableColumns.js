/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import OrgRoleUpdateForm from './orgRoleUpdateForm';
import {api, ADelete, AvailableSwitch, AssignAndUnAssignPerson, Privilege, AModal} from '../../resource';
import {view as Auth} from '../../resource/auth';
const {updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} = api.orgRole;
import {FilterType} from '../../constants';
const type = FilterType.ORGROLE;

export default (refresh) => {
    return [{
        title: '名称',
        dataIndex: 'name',
    }, {
        title: '标识符',
        dataIndex: 'sn',
    }, {
        title: '所属机构',
        dataIndex: 'orgName',
    }, {
        title: '是否可用',
        render: (text, record) => {
            const sysDefault = record.sysDefault;
            if (sysDefault) {
                return <div>内置角色</div>;
            } else {
                return <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>;
            }
        },
    }, {
        title: '操作',
        render: (text, record) => {
            const notSysDefault = !record.sysDefault;
            const needAuth = !(record.sn.indexOf('SM_') === 0);
            const assignTitle = '为角色【' + record.name + '】分配人员';
            return (
                <span>
                    {
                        (addMenuRight || addControllerResourceRight) && needAuth &&
                        <span>
                            <AModal title="授予角色权限" text="授权" width="600px">
                                <Auth type={type} dataId={record.id}/>
                            </AModal>
                            <span className="ant-divider" />
                            {(assignUserRight || unAssignUserRight || (updateRight && notSysDefault) || findPrivilegeRight || (deleteRight && notSysDefault))
                            && <span className="ant-divider" />}
                        </span>

                    }
                    {
                        (assignUserRight || unAssignUserRight) &&
                        <span>
                            <AModal title={assignTitle} text="分配人员" width="80%">
                                <AssignAndUnAssignPerson type={type} dataId={record.id}/>
                            </AModal>
                            {((updateRight && notSysDefault) || findPrivilegeRight || (deleteRight && notSysDefault)) && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        updateRight && notSysDefault &&
                        <span>
                                <AModal title="修改角色" text="修改">
                                    <OrgRoleUpdateForm cb={() => {refresh();}} data={record}/>
                                </AModal>
                            {(findPrivilegeRight || (deleteRight && notSysDefault)) && <span className="ant-divider" />}
                            </span>
                    }
                    {
                        findPrivilegeRight &&
                        <span>
                            <AModal title="权限" text="查看权限" width="600px">
                                <Privilege id={record.id} type={type}/>
                            </AModal>
                            {deleteRight && notSysDefault && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        deleteRight && notSysDefault &&
                        <ADelete dataId={record.id} type={type} cb={() => {refresh();}}/>
                    }
                </span>
            );
        },
    }];
}