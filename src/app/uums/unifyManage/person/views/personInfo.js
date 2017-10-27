/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import 'FayAntd/button/style/index.js';
import 'FayAntd/form/style/index.js';
const FormItem = Form.Item;
import style from './style.css';
import PersonUpdateForm from './personUpdateForm';
import Popconfirm from 'antd/lib/popconfirm';
import 'FayAntd/popconfirm/style/index.js';
import 'FayAntd/alert/style/index.js';
import {api} from '../../../resource';
import {actions as orgStructureActions} from '../../orgStructure';
import {connect} from 'react-redux';
import {actions as unitInfoActions} from '../../unitInfo';
import message from 'antd/lib/message';
import 'FayAntd/message/style/index.js';
import {findByIdForUnifyPerson, showUpdatePageForUnifyPerson} from '../actions';
import {FIND_BY_ID_FOR_UNIFY_PERSON_FETCH, FIND_BY_ID_FOR_UNIFY_PERSON_SUCCESS, FIND_BY_ID_FOR_UNIFY_PERSON_ERROR} from '../actionTypes';

const PersonInfo = ({id, type, res, parentType, parentId, update, showUpdatePage, remove, getData}) => {
    switch (type) {
        case FIND_BY_ID_FOR_UNIFY_PERSON_FETCH:
            return <div>玩命地加载中</div>;
        case FIND_BY_ID_FOR_UNIFY_PERSON_SUCCESS:
            if (res.success) {
                const {data} = res;
                if (data) {
                    if (update) {
                        return <PersonUpdateForm/>;
                    }
                    const {name, sn, createDate} = data;

                    return (
                        <Form>
                            <div>
                                <FormItem label="姓名：">
                                    <label className={style.formLable}>{name}</label>
                                </FormItem>
                                <FormItem label="标识：">
                                    <label className={style.formLable}>{sn}</label>
                                </FormItem>
                                <FormItem label="创建时间：">
                                    <label className={style.formLable}>{createDate}</label>
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button style={{ marginLeft: 8 }} onClick={showUpdatePage} size="default">
                                    修改
                                </Button>
                                <Popconfirm title="您确认移除?" onConfirm={() => remove(id, parentType, parentId)} okText="确认" cancelText="取消">
                                    <Button style={{ marginLeft: 8 }} size="default">
                                        移除
                                    </Button>
                                </Popconfirm>
                            </FormItem>
                        </Form>
                    );
                } else {
                    return <div>未获取到该人员信息数据，请刷新后重试</div>;
                }
            } else {
                return <div>{res.errMessage}</div>;
            }

        case FIND_BY_ID_FOR_UNIFY_PERSON_ERROR:
            return <div>加载失败</div>;
        default:
            getData(id);
            return <div>未加载数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {id, type, res, update, parentType, parentId} = state.uumsUnifyPerson;
    return {
        type: type,
        res: res,
        update: update,
        id: id,
        parentType: parentType,
        parentId: parentId
    }
};

const mapDispatchToProps = (dispatch) => {

    const getData = (id) => {
        dispatch(findByIdForUnifyPerson(id));
    };

    const showUpdatePage = () => {
        dispatch(showUpdatePageForUnifyPerson(true));
    };

    const remove = (id, parentType, parentId) => {
        let values = {};
        (parentType === 'ORG') && (values.orgId = parentId);
        (parentType === 'GROUP') && (values.groupId = parentId);
        (parentType === 'POSITION') && (values.positionId = parentId);
        (parentType === 'ROLE') && (values.roleId = parentId);
        values.userId = id;
        api.user.relationRemove(values)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(orgStructureActions.findOrgStructureInTree({}, false));
                    dispatch(unitInfoActions.changeForUnitInfo('', '删除成功'));
                } else {
                    message.error('删除失败！');
                }
            });
    };

    return {
        getData: getData,
        showUpdatePage: showUpdatePage,
        remove: remove
    }
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(PersonInfo));
