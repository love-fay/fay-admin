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
import {connect} from 'react-redux';
import {showUpdatePageForUnifyPerson, updateForUnifyPerson} from '../actions';
import {UPDATE_FOR_UNIFY_PERSON_FETCH, UPDATE_FOR_UNIFY_PERSON_SUCCESS, UPDATE_FOR_UNIFY_PERSON_ERROR} from '../actionTypes';

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

    const {id, name, userId} = res.data;
    const { getFieldDecorator } = form;

    switch (type){
        case UPDATE_FOR_UNIFY_PERSON_FETCH:
            showMessage= 'none';
            message= '';
            messageType= '';
            loading = true;
            break;
        case UPDATE_FOR_UNIFY_PERSON_SUCCESS:
            showMessage= 'block';
            message= '保存成功';
            messageType= 'success';
            loading = false;
            break;
        case UPDATE_FOR_UNIFY_PERSON_ERROR:
            showMessage= 'block';
            message= '保存失败';
            messageType= 'error';
            loading = false;
            break;
        default:
            break;
    }

    return (
        <Form layout='vertical' onSubmit={(e) => handleSubmit(e, userId)}>
            <FormItem label="姓名">
                {getFieldDecorator('person.name', {
                    rules: [{
                        required: true, message: '请输入姓名!',
                    }],
                    initialValue: name,
                })(
                    <Input />
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
    const {updateType, res} = state.uumsUnifyPerson;
    return {
        type: updateType,
        res: res,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const hideUpdatePage = () => {
        dispatch(showUpdatePageForUnifyPerson(false));
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();
        ownProps.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.id = id;
                dispatch(updateForUnifyPerson(values));
            }
        });
    };

    return {
        hideUpdatePage: hideUpdatePage,
        handleSubmit: handleSubmit
    }
};


export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(UpdateForm));
