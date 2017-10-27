/**
 * Created by feichongzheng on 17/1/16.
 */
import React, {Component} from 'react';
import Popconfirm from 'antd/lib/popconfirm';
import message from 'antd/lib/message';
import 'FayAntd/popconfirm/style/index.js';
import 'FayAntd/message/style/index.js';
import PropTypes from 'prop-types';
import {app, org, group, position, orgRole, user, menuResource, controllerResource, role} from '../api';
import {FilterType} from '../../constants';

class ADelete extends Component {

    confirm = () => {
        const {dataId, type, cb} = this.props;
        const ids = dataId.split(';');
        let promise;
        switch (type) {
            case FilterType.APP:
                promise = app.remove({ids: ids});
                break;
            case FilterType.ORG:
                promise = org.remove({ids: ids});
                break;
            case FilterType.GROUP:
                promise = group.remove({ids: ids});
                break;
            case FilterType.POSITION:
                promise = position.remove({ids: ids});
                break;
            case FilterType.ORGROLE:
                promise = orgRole.remove({ids: ids});
                break;
            case FilterType.USER:
                promise = user.remove({ids: ids});
                break;
            case FilterType.MENURESOURCE:
                promise = menuResource.remove({ids: ids});
                break;
            case FilterType.CONTROLLERRESOURCE:
                promise = controllerResource.remove({ids: ids});
                break;
            case FilterType.ROLE:
                promise = role.remove({ids: ids});
                break;
            default:
                break;
        }
        promise.then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    message.success('删除成功！');
                    cb();
                } else {
                    message.error('删除失败！');
                }
            })
            .catch( (err) => {
                throw err;
            });
    };

    render () {
        return (
            <Popconfirm title="您确认删除?" onConfirm={this.confirm} okText="确认" cancelText="取消">
                <a href="#">删除</a>
            </Popconfirm>
        );
    }
}

ADelete.propTypes = {
    dataId: PropTypes.string,
    type: PropTypes.string,
    cb: PropTypes.func,
};

export default ADelete;
