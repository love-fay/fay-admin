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
import {findUnAssignPersonForPage} from '../actions';

const SearchForm = ({form, handleSubmit}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={handleSubmit}>
            <FormItem>
                {getFieldDecorator('name', {initialValue: ''})(
                    <Input placeholder="姓名" size="small" style={{width: '100px'}}/>
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('sn', {initialValue: ''})(
                    <Input placeholder="标识符" size="small" style={{width: '100px'}}/>
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
                    name: values.name,
                    sn: values.sn,
                    dataId: dataId,
                    number: 0,
                    size: 10,
                };
                dispatch(findUnAssignPersonForPage(type, params));
            }
        });
    };
    return {
        handleSubmit: handleSubmit
    }
};

export default Form.create()(connect(null, mapDispatchToProps)(SearchForm));
