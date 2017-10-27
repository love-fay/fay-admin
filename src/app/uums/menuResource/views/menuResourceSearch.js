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
import MenuResourceSaveForm from './menuResourceSaveForm';
import {AppSelect} from '../../app';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findMenuResourceForTreeTable} from '../actions';
import {connect} from 'react-redux';

const {saveRight} = api.menuResource;

const SearchForm = ({expandedRowKeys, handleSubmit, onChange, form}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={(e) => handleSubmit(e, expandedRowKeys)}>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('appId')(
                        <AppSelect size="large" allowClear placeholder="请选择所属应用" onChange={(e) => onChange(e, expandedRowKeys)}/>
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
                    <ButtonSave title="新增菜单资源">
                        <MenuResourceSaveForm/>
                    </ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        expandedRowKeys: state.uumsMenuResource.expandedRowKeys,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {

    const handleSubmit = (e, expandedRowKeys) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: values.appId,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findMenuResourceForTreeTable(params, expandedRowKeys));
            }
        });
    };

    const onChange = (value, expandedRowKeys) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    appId: value,
                    name: values.name,
                    number: 0,
                    size: 20,
                };
                dispatch(findMenuResourceForTreeTable(params, expandedRowKeys));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChange: onChange
    }
};

const MenuResourceSearch = Form.create()(connect(mapStateToProps, mapDispatchToProps)(SearchForm));

export default MenuResourceSearch;
