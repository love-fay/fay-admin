/**
 * Created by feichongzheng on 17/1/11.
 */
import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/button/style/index.js';
import RoleSaveForm from './roleSaveForm';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findRoleForPage} from '../actions';
import {connect} from 'react-redux';
import {AppSelect} from '../../app';

const {saveRight} = api.role;

const SearchForm = ({handleSubmit, form, onChange}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('appId')(
                        <AppSelect size="large" allowClear placeholder="请选择所属应用" onChange={onChange}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                {getFieldDecorator('name')(
                    <Input placeholder="名称"/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" icon="search" htmlType="submit" size="default">搜索</Button>
            </FormItem>
            {
                saveRight &&
                <FormItem>
                    <ButtonSave title="新增角色">
                        <RoleSaveForm/>
                    </ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: values.appId,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findRoleForPage(params));
            }
        });
    };

    const onChange = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findRoleForPage(params));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChange: onChange
    }
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

const RoleSearch = Form.create()(connect(null, mapDispatchToProps)(SearchForm));

export default RoleSearch;
