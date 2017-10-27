/**
 * Created by feichongzheng on 17/1/18.
 */
import React, {Component} from 'react';
import SelectForIdAndName from '../../views/selectForIdAndName';
import PropTypes from 'prop-types';
import {app} from '../../api';

class AppSelect extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
        this.getData();
    }

    getData () {
        app.findAppForAuthSelect({})
            .then((res) => res.json())
            .then((res) => {
                const data = res.data;
                const {voList} = data;
                let value = (voList.length === 0 || this.props.allowClear) ? this.props.value : voList[0].id;
                this.setState({data: voList, value: value});
                this.props.onChange(value);
            })
            .catch( (err) => {
                throw err;
            });
    }

    onChange = (value) => {
        this.setState({value: value});
        this.props.onChange(value);
    };

    render () {
        return (
            <SelectForIdAndName size={this.props.size} allowClear={this.props.allowClear} value={this.state.value} placeholder="请选择应用系统" data={this.state.data} onChange={this.onChange}/>
        );
    }
}

AppSelect.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    allowClear: PropTypes.bool,
    size: PropTypes.string,
    onChange: PropTypes.func,
};

export default AppSelect;
