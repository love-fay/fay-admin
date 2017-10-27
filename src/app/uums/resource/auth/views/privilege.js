/**
 * Created by feichongzheng on 17/8/25.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tag from 'antd/lib/tag';
import Alert from 'antd/lib/alert';
import 'FayAntd/tag/style/index.js';
import 'FayAntd/alert/style/index.js';
import {org, group, position, orgRole, user, role, person} from '../../api';
import {FilterType} from '../../../constants';

class Privilege extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: [],
            message: '正在获取被授予的权限列表',
            messageType: 'info',
        };
        this.getData();
    }

    getData = () => {
        const {id, type} = this.props;
        let promise;
        switch (type) {
            case FilterType.ORG:
                promise = org.findPrivilege({dataId: id});
                break;
            case FilterType.GROUP:
                promise = group.findPrivilege({dataId: id});
                break;
            case FilterType.POSITION:
                promise = position.findPrivilege({dataId: id});
                break;
            case FilterType.ORGROLE:
                promise = orgRole.findPrivilege({dataId: id});
                break;
            case FilterType.USER:
                promise = user.findPrivilege({dataId: id});
                break;
            case FilterType.ROLE:
                promise = role.findPrivilege({dataId: id});
                break;
            case FilterType.PERSON:
                promise = person.findPrivilege({dataId: id});
                break;
            default:
                break;
        }
        promise && promise.then((res) => res.json())
            .then((res) => {
                const success = res.success;
                if (success) {
                    const data = res.data;
                    if (data === undefined || data.length === 0) {
                        this.setState({data: data, message: '尚未授予任何权限'});
                    } else {
                        this.setState({data: data});
                    }
                } else {
                    const errMessage = res.errMessage;
                    this.setState({data: null, message: errMessage, messageType: 'error'});
                }
            })
            .catch( (err) => {
                throw err;
            });
    };

    render () {
        const data = this.state.data;
        if (data.length === 0) return <Alert message={this.state.message} type={this.state.messageType} showIcon/>;
        const loop = (data) => data.map((item, i) => {
            const arr = item.split(',');
            const detail = (d) => d.map((i) => {
                const [type, name] = i.split('_');
                if (type === 'APP') {
                    return <span><Tag color="#108ee9">系统</Tag>{name}</span>;
                } else if (type === 'MENU') {
                    return <span><Tag color="#87d068">菜单</Tag>{name}</span>;
                } else if (type === 'CONTROLLER') {
                    return <span><Tag color="#2db7f5">请求</Tag>{name}</span>;
                } else {
                    return '';
                }
            });
            return <div key={i}>{detail(arr)}</div>;
        });
        return (
            <div>
                {loop(data)}
            </div>
        );
    }
}

Privilege.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string
};

export default Privilege;
