/**
 * Created by feichongzheng on 17/10/11.
 */
import React from 'react';
import {api, Privilege, AModal} from '../../resource';
import {view as Auth} from '../../resource/auth';
const {addMenuRight, addControllerResourceRight, findPrivilegeRight} = api.user;
import {FilterType} from '../../constants';
const type = FilterType.USER;

export default () => {
    return [{
        title: '姓名',
        dataIndex: 'name',
    }, {
        title: '标识',
        dataIndex: 'sn',
    }, {
        title: '操作',
        render: (text, record) => {
            return (
                <span>
                    {
                        (addMenuRight || addControllerResourceRight) &&
                        <span>
                            <AModal title="授予人员权限" text="授权" width="600px">
                                <Auth type={type} dataId={record.id}/>
                            </AModal>
                            {findPrivilegeRight && <span className="ant-divider" />}
                        </span>
                    }
                    {
                        findPrivilegeRight &&
                        <span>
                            <AModal title="权限" text="查看权限" width="600px">
                                <Privilege id={record.id} type={type}/>
                            </AModal>
                        </span>
                    }
                </span>
            );
        },
    }];
}