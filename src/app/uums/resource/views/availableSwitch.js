/**
 * Created by feichongzheng on 17/1/22.
 */
import React, {Component} from 'react';
import Switch from 'antd/lib/switch';
import 'FayAntd/switch/style/index.js';
import PropTypes from 'prop-types';
import {org, group, position, orgRole, user, menuResource, controllerResource, role} from '../api';
import {FilterType} from '../../constants';

class AvailableSwitch extends Component {

    constructor (props) {
        super(props);
        this.state = {
            checked: props.isAvailable === 1,
            isAvailable: props.isAvailable,
        };
    }

    onChange = () => {
        let isAvailable = this.state.isAvailable === 1 ? 2 : 1;
        this.setState({
            checked: isAvailable === 1,
            isAvailable: isAvailable,
        });
        const {dataId, type} = this.props;
        const params = {id: dataId, isAvailable: isAvailable};
        switch (type) {
            case FilterType.ORG:
                org.updAvailable(params);
                break;
            case FilterType.GROUP:
                group.updAvailable(params);
                break;
            case FilterType.POSITION:
                position.updAvailable(params);
                break;
            case FilterType.ORGROLE:
                orgRole.updAvailable(params);
                break;
            case FilterType.USER:
                user.updAvailable(params);
                break;
            case FilterType.MENURESOURCE:
                menuResource.updAvailable(params);
                break;
            case FilterType.CONTROLLERRESOURCE:
                controllerResource.updAvailable(params);
                break;
            case FilterType.ROLE:
                role.updAvailable(params);
                break;
            default:
                break;
        }
    };

    componentWillReceiveProps (nextProps) {
        this.setState({
            checked: nextProps.isAvailable === 1,
            isAvailable: nextProps.isAvailable,
        });
    }

    render () {
        return (
            <Switch checked={this.state.checked} checkedChildren={'可用'} unCheckedChildren={'不可用'} onChange={this.onChange} />
        );
    }
}

AvailableSwitch.propTypes = {
    isAvailable: PropTypes.number,
    type: PropTypes.string,
    dataId: PropTypes.string,
};

export default AvailableSwitch;
