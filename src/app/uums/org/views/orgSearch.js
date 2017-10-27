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
import OrgSaveForm from './orgSaveForm';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findOrgForTreeTable} from '../actions';
import {connect} from 'react-redux';

const {saveRight} = api.org;

const OrgSearchForm = ({expandedRowKeys, handleSubmit, form}) => {
    const {getFieldDecorator} = form;
    return (
        <Form layout='inline' onSubmit={(e) => handleSubmit(e, expandedRowKeys)}>
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
                    <ButtonSave title="新增机构"><OrgSaveForm /></ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

OrgSearchForm.propTypes = {
    form: PropTypes.object,
};

const mapStateToProps = (state) => {
    return {
        expandedRowKeys: state.uumsOrg.expandedRowKeys,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e, expandedRowKeys) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                dispatch(findOrgForTreeTable({name: values.name}, expandedRowKeys));
            }
        });
    };
    return {
        handleSubmit: handleSubmit
    }
};

const OrgSearch = Form.create()(connect(mapStateToProps, mapDispatchToProps)(OrgSearchForm));

export default OrgSearch;
