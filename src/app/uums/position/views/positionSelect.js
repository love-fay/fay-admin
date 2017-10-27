/**
 * Created by feichongzheng on 17/1/18.
 */
import React, {Component} from 'react';
import message from 'antd/lib/message';
import 'FayAntd/message/style/index.js';
import PropTypes from 'prop-types';
import {api, SelectForIdAndName} from '../../resource';
const {findByOrgAndGroupForSelect} = api.position;

class PositionSelect extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getData(this.props.orgId, this.props.groupId);
    }

    getData (orgId, groupId) {
        findByOrgAndGroupForSelect({orgId: orgId, groupId: groupId}).then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    this.setState({data: res.data.voList});
                } else {
                    message.error('获取职位列表失败');
                }
            })
            .catch( (err) => {
                throw err;
            });
    }

    componentWillReceiveProps (nextProps) {
        this.getData(nextProps.orgId, nextProps.groupId);
    }

    render () {
        return (
            <SelectForIdAndName
                size={this.props.size}
                allowClear={this.props.allowClear}
                value={this.props.value}
                placeholder={this.props.placeholder}
                data={this.state.data}
                onChange={this.props.onChange}/>
        );
    }
}

PositionSelect.propTypes = {
    size: PropTypes.string,
    allowClear: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    orgId: PropTypes.string,
    groupId: PropTypes.string,
    onChange: PropTypes.func,
};

export default PositionSelect;
