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
const FormItem = Form.Item;
import {connect} from 'react-redux';
import {findUnAssignUserForPage} from '../actions';

const SearchForm = ({form, handleSubmit}) => {

    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem>
                {getFieldDecorator('nickname', {initialValue: ''})(
                    <Input placeholder="昵称" size="small" style={{width: '100px'}}/>
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('username', {initialValue: ''})(
                    <Input placeholder="用户名" size="small" style={{width: '100px'}}/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" icon="search" htmlType="submit" size="small"/>
            </FormItem>
        </Form>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {form, type, dataId} = ownProps;
        form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    nickname: values.nickname,
                    username: values.username,
                    dataId: dataId,
                    number: 0,
                    size: 10,
                };
                dispatch(findUnAssignUserForPage(type, params));
            }
        });
    };
    return {
        handleSubmit: handleSubmit
    }
};


export default Form.create()(connect(null, mapDispatchToProps)(SearchForm));
