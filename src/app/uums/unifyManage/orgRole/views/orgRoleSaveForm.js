/**
 * Created by feichongzheng on 17/1/12.
 */
import React, {Component} from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Alert from 'antd/lib/alert';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/alert/style/index.js';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api} from '../../../resource';
import {actions as orgStructureActions} from '../../orgStructure';
import {connect} from 'react-redux';

class SaveForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            messageType: '',
            showMessage: 'none',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.orgId = this.props.orgId;
                api.orgRole.save(values)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.success) {
                            this.setState({showMessage: 'block', message: '保存成功', messageType: 'success', loading: false});
                            this.props.refreshTree();
                        } else {
                            this.setState({showMessage: 'block', message: errMessage, messageType: 'error', loading: false});
                        }
                    });
            } else {
                this.setState({ loading: false});
            }
        });
    };

    handleReset = () => {
        this.setState({showMessage: 'none', message: '', messageType: ''});
        this.props.form.resetFields();
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='vertical' onSubmit={this.handleSubmit}>
                <FormItem label="名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入名称!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="标识符">
                    {getFieldDecorator('sn', {
                        rules: [{
                            required: true, message: '请输入标识符!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem>
                    <Alert style={{display: this.state.showMessage}} message={this.state.message} type={this.state.messageType} showIcon/>
                    <Button type="primary" loading={this.state.loading} htmlType="submit" size="default">保存</Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleReset} size="default">
                        重置
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

SaveForm.propTypes = {
    form: PropTypes.object,
    refreshTree: PropTypes.func,
    orgId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
    const refreshTree = () => {
        dispatch(orgStructureActions.findOrgStructureInTree({}, false));
    };
    return {
        refreshTree: refreshTree
    }
};

export default Form.create()(connect(null, mapDispatchToProps)(SaveForm));
