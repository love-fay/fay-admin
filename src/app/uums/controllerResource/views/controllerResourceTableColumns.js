/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import {api, ADelete, AvailableSwitch, AModal} from '../../resource';
import ControllerResourceUpdateForm from './controllerResourceUpdateForm';
import {FilterType} from '../../constants';
const type = FilterType.CONTROLLERRESOURCE;
const {updateRight, deleteRight} = api.controllerResource;

export default (refresh) => {
    return [{
        title: '名称',
        dataIndex: 'treeObject.name',
    }, {
        title: '标识符',
        dataIndex: 'treeObject.sn',
    }, {
        title: 'urlMapping',
        dataIndex: 'treeObject.urlMapping',
    }, {
        title: '排序',
        dataIndex: 'treeObject.order',
    }, {
        title: '所属菜单',
        dataIndex: 'treeObject.menuName',
    }, {
        title: '所属系统',
        dataIndex: 'treeObject.appName',
    }, {
        title: '是否可用',
        render: (text, record) => {
            record = record.treeObject;
            return <AvailableSwitch dataId={record.id} isAvailable={record.isAvailable} type={type}/>;
        },
    }, {
        title: '操作',
        render: (text, record) => {
            record = record.treeObject;
            return (
                <span>
                    {
                        updateRight &&
                        <span>
                            <AModal title="修改请求资源" text="修改">
                                <ControllerResourceUpdateForm cb={() => {refresh();}} data={record}/>
                            </AModal>
                        </span>
                    }
                    {
                        deleteRight && <span className="ant-divider" />
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