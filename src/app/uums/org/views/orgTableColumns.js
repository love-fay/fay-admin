/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import {api, ADelete, AvailableSwitch, AssignAndUnAssignPerson, Privilege, AModal} from '../../resource';
import {view as Auth} from '../../resource/auth';
import OrgUpdateForm from './orgUpdateForm';
import {FilterType} from '../../constants';
const type = FilterType.ORG;
const {updateRight, deleteRight, addMenuRight, addControllerResourceRight, assignUserRight, unAssignUserRight, findPrivilegeRight} = api.org;

export default (refresh) => {
    return [{
        title: '名称',
        dataIndex: 'treeObject.name',
    }, {
        title: '排序号',
        dataIndex: 'treeObject.orderNum',
    }, {
        title: '管理类型',
        dataIndex: 'treeObject.managerTypeS',
    }, {
        title: '地址',
        dataIndex: 'treeObject.address',
    }, {
        title: '电话',
        dataIndex: 'treeObject.phone',
    }, {
        title: '父级',
        dataIndex: 'treeObject.parentName',
    }, {
        title: '是否可用',
        render: (text, record) => {
            record = record.treeObject;
            return (
                <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>
            );
        },
    }, {
        title: '操作',
        render: (text, record) => {
            record = record.treeObject;
            const assignTitle = '为机构【' + record.name + '】分配人员';
            return (
                <span>
                    {
                        (addMenuRight || addControllerResourceRight) &&
                        <span>
                            <AModal title="授予机构权限" text="授权" width="600px">
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
                            <AModal title="修改机构" text="修改">
                                <OrgUpdateForm cb={() => {refresh();}} data={record}/>
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