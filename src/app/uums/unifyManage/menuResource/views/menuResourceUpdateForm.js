/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Alert from 'antd/lib/alert';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';
import 'FayAntd/input/style/index.js';
import 'FayAntd/alert/style/index.js';
const FormItem = Form.Item;
import InputNumber from 'antd/lib/input-number';
import 'FayAntd/input-number/style/index.js';
import {connect} from 'react-redux';
import {showUpdatePageForUnifyMenu, updateForUnifyMenu} from '../actions';
import {UPDATE_FOR_UNIFY_MENU_FETCH, UPDATE_FOR_UNIFY_MENU_SUCCESS, UPDATE_FOR_UNIFY_MENU_ERROR} from '../actionTypes';

const UpdateForm = ({type, res, form, handleSubmit, hideUpdatePage}) => {

    let showMessage = 'none';
    let message = '';
    let messageType = '';
    let loading = false;

    const handleReset = () => {
        showMessage= 'none';
        message= '';
        messageType= '';
        form.resetFields();
    };

    const {id, appId, parentId, name, sn, url, icon, order} = res.data;
    const { getFieldDecorator } = form;

    switch (type){
        case UPDATE_FOR_UNIFY_MENU_FETCH:
            showMessage= 'none';
            message= '';
            messageType= '';
            loading = true;
            break;
        case UPDATE_FOR_UNIFY_MENU_SUCCESS:
            showMessage= 'block';
            message= '保存成功';
            messageType= 'success';
            loading = false;
            break;
        case UPDATE_FOR_UNIFY_MENU_ERROR:
            showMessage= 'block';
            message= '保存失败';
            messageType= 'error';
            loading = false;
            break;
        default:
            break;
    }
    return (
        <Form layout='vertical' onSubmit={(e) => handleSubmit(e, id, appId, parentId)}>
            <FormItem label="名称">
                {getFieldDecorator('menuName', {
                    rules: [{
                        required: true, message: '请输入名称!',
                    }],
                    initialValue: name,
                })(
                    <Input/>
                )}
            </FormItem>
            <FormItem label="标识符">
                {getFieldDecorator('menuSn', {
                    rules: [{
                        required: true, message: '请输入标识符!',
                    }],
                    initialValue: sn,
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem label="url">
                {getFieldDecorator('menuUrl', {
                    initialValue: url,
                })(
                    <Input/>
                )}
            </FormItem>
            <FormItem label="icon">
                {getFieldDecorator('menuIcon', {
                    initialValue: icon,
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem label="排序号">
                {getFieldDecorator('menuOrder', {
                    initialValue: order,
                })(
                    <InputNumber min={1} max={100000} style={{width: '100%'}}/>
                )}
            </FormItem>
            <FormItem>
                <Alert style={{display: showMessage}} message={message} type={messageType} showIcon/>
                <Button type="primary" loading={loading} htmlType="submit" size="default">保存</Button>
                <Button style={{ marginLeft: 8 }} onClick={handleReset} size="default">
                    重置
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={hideUpdatePage} size="default">
                    返回
                </Button>
            </FormItem>
        </Form>
    );
};

const mapStateToProps = (state) => {
    const {updateType, res} = state.uumsUnifyMenu;
    return {
        type: updateType,
        res: res,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const hideUpdatePage = () => {
        dispatch(showUpdatePageForUnifyMenu(false));
    };

    const handleSubmit = (e, id, appId, parentId) => {
        e.preventDefault();
        ownProps.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = id;
                appId && (values.application = {id: appId});
                parentId && (values.parent = {id: parentId});
                dispatch(updateForUnifyMenu(values));
            }
        });
    };

    return {
        hideUpdatePage: hideUpdatePage,
        handleSubmit: handleSubmit
    }
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(UpdateForm));

