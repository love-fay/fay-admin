/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import {api, ADelete, AvailableSwitch, AModal} from '../../resource';
import MenuResourceUpdateForm from './menuResourceUpdateForm';
import {FilterType} from '../../constants';
const type = FilterType.MENURESOURCE;
const {updateRight, deleteRight} = api.menuResource;

export default (refresh) => {
    return [{
        title: '名称',
        dataIndex: 'treeObject.name',
    }, {
        title: '标识符',
        dataIndex: 'treeObject.sn',
    }, {
        title: 'url',
        dataIndex: 'treeObject.url',
    }, {
        title: 'icon',
        dataIndex: 'treeObject.icon',
    }, {
        title: '排序',
        dataIndex: 'treeObject.order',
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
                        <AModal title="修改菜单资源" text="修改">
                            <MenuResourceUpdateForm cb={() => {refresh();}} data={record}/>
                        </AModal>
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