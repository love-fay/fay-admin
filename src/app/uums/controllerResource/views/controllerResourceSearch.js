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
import ControllerResourceSaveForm from './controllerResourceSaveForm';
import {AppSelect} from '../../app';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findControllerResourceForTreeTable} from '../actions';
import {connect} from 'react-redux';
import {MenuResourceTreeSelect} from '../../menuResource';

const {saveRight} = api.controllerResource;

const SearchForm = ({expandedRowKeys, handleSubmit, onChangeApp, onChangeMenu, appId, form}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={(e) => handleSubmit(e, expandedRowKeys)}>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('appId')(
                        <AppSelect size="large" allowClear placeholder="请选择应用系统" onChange={(e) => onChangeApp(e, expandedRowKeys)}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('menuId')(
                        <MenuResourceTreeSelect size="large" showSearch allowClear placeholder="请选择菜单资源" appId={appId}
                                                onChange={(e) => onChangeMenu(e, expandedRowKeys)}/>
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
            {saveRight &&
            <FormItem>
                <ButtonSave title="新增请求资源">
                    <ControllerResourceSaveForm/>
                </ButtonSave>
            </FormItem>}
        </Form>
    )
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

const mapStateToProps = (state) => {
    const {expandedRowKeys, params} = state.uumsControllerResource;
    return {
        expandedRowKeys: expandedRowKeys,
        appId: params && params.appId,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e, expandedRowKeys) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: values.appId,
                    menuId: values.menuId,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findControllerResourceForTreeTable(params, expandedRowKeys));
            }
        });
    };

    const onChangeApp = (value, expandedRowKeys) => {
        const {form} = ownProps;
        form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findControllerResourceForTreeTable(params, expandedRowKeys));
            }
        });
    };

    const onChangeMenu = (value, expandedRowKeys) => {
        const {form} = ownProps;
        form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: values.appId,
                    menuId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findControllerResourceForTreeTable(params, expandedRowKeys));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChangeApp: onChangeApp,
        onChangeMenu: onChangeMenu
    }
};

const ControllerResourceSearch = Form.create()(connect(mapStateToProps, mapDispatchToProps)(SearchForm));

export default ControllerResourceSearch;
