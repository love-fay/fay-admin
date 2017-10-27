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
import PersonSaveForm from './personSaveForm';
const FormItem = Form.Item;
import PropTypes from 'prop-types';
import {api, ButtonSave} from '../../resource';
import {findPersonForPage} from '../actions';
import {connect} from 'react-redux';
import {OrgTreeSelect} from '../../org';
import {GroupSelect} from '../../group';
import {PositionSelect} from '../../position';

const {saveRight} = api.user;

const SearchForm = ({handleSubmit, form, onChangeOrg, onChangeGroup, onChangePosition, orgId, groupId}) => {
    const {getFieldDecorator} = form;
    return (
        <Form inline onSubmit={handleSubmit}>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('orgId')(
                        <OrgTreeSelect showSearch size="large" allowClear placeholder="请选择机构" onChange={onChangeOrg}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('groupId')(
                        <GroupSelect orgId={orgId} size="large" allowClear placeholder="请选择部门" onChange={onChangeGroup}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                <div style={{width: '200px'}}>
                    {getFieldDecorator('positionId')(
                        <PositionSelect orgId={orgId} groupId={groupId} size="large" allowClear placeholder="请选择职位" onChange={onChangePosition}/>
                    )}
                </div>
            </FormItem>
            <FormItem>
                {getFieldDecorator('name')(
                    <Input placeholder="姓名"/>
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('sn')(
                    <Input placeholder="标识"/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" icon="search" htmlType="submit" size="default">搜索</Button>
            </FormItem>
            {
                saveRight &&
                <FormItem>
                    <ButtonSave title="新增用户">
                        <PersonSaveForm/>
                    </ButtonSave>
                </FormItem>
            }
        </Form>
    );
};

const mapStateToProps = (state) => {
    const {params} = state.uumsPosition;
    return {
        orgId: params && params.orgId,
        groupId: params && params.groupId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: values.orgId,
                    groupId: values.groupId,
                    positionId: values.positionId,
                    name: values.name,
                    sn: values.sn,
                    number: 0,
                    size: 20,
                };
                dispatch(findPersonForPage(params));
            }
        });
    };

    const onChangeOrg = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: value,
                    name: values.name,
                    sn: values.sn,
                    number: 0,
                    size: 20,
                };
                dispatch(findPersonForPage(params));
            }
        });
    };

    const onChangeGroup = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: values.orgId,
                    groupId: value,
                    name: values.name,
                    sn: values.sn,
                    number: 0,
                    size: 20,
                };
                dispatch(findPersonForPage(params));
            }
        });
    };

    const onChangePosition = (value) => {
        ownProps.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    orgId: values.orgId,
                    groupId: values.groupId,
                    positionId: value,
                    name: values.name,
                    sn: values.sn,
                    number: 0,
                    size: 20,
                };
                dispatch(findPersonForPage(params));
            }
        });
    };

    return {
        handleSubmit: handleSubmit,
        onChangeOrg: onChangeOrg,
        onChangeGroup: onChangeGroup,
        onChangePosition: onChangePosition
    }
};

SearchForm.propTypes = {
    form: PropTypes.object,
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
