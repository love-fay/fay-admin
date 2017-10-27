/**
 * Created by feichongzheng on 17/1/18.
 */
import React, {Component} from 'react';
import message from 'antd/lib/message';
import TreeSelect from 'antd/lib/tree-select';
import 'FayAntd/message/style/index.js';
import 'FayAntd/tree-select/style/index.js';
import PropTypes from 'prop-types';
import {api} from '../../resource';

class MenuResourceTreeSelect extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
        this.props.appId === '0' || this.getData(this.props.appId);
    }

    getData (appId) {
        api.menuResource.findForTreeSelect({appId: appId, deleteId: this.props.deleteId})
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    this.setState({data: res.data});
                } else {
                    message.error('获取菜单资源列表失败');
                }
            })
            .catch( (err) => {
                throw err;
            });
    }

    componentWillReceiveProps (nextProps) {
        this.getData(nextProps.appId);
    }

    render () {
        return (
            <TreeSelect
                size={this.props.size}
                treeData={this.state.data}
                placeholder={this.props.placeholder}
                allowClear={this.props.allowClear}
                value={this.props.value}
                onChange={this.props.onChange}
                showSearch={this.props.showSearch}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeDefaultExpandAll
                treeNodeFilterProp="label"
            />
        );
    }
}

MenuResourceTreeSelect.propTypes = {
    appId: PropTypes.string,
    deleteId: PropTypes.string,
    size: PropTypes.string,
    allowClear: PropTypes.bool,
    showSearch: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default MenuResourceTreeSelect;
