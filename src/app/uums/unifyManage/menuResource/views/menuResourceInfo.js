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
import MenuResourceUpdateForm from './menuResourceUpdateForm';
import Popconfirm from 'antd/lib/popconfirm';
import 'FayAntd/popconfirm/style/index.js';
import {api} from '../../../resource';
import {actions as resourceStructureActions} from '../../resourceStructure';
import {connect} from 'react-redux';
import {actions as unitInfoActions} from '../../unitInfo';
import {FIND_BY_ID_FOR_UNIFY_MENU_FETCH, FIND_BY_ID_FOR_UNIFY_MENU_SUCCESS, FIND_BY_ID_FOR_UNIFY_MENU_ERROR} from '../actionTypes';
import {findByIdForUnifyMenu, showUpdatePageForUnifyMenu} from '../actions';
import message from 'antd/lib/message';
import 'FayAntd/message/style/index.js';

const MenuResourceInfo = ({id, type, res, update, showUpdatePage, remove, getData}) => {
    switch (type) {
        case FIND_BY_ID_FOR_UNIFY_MENU_FETCH:
            return <div>玩命地加载中</div>;
        case FIND_BY_ID_FOR_UNIFY_MENU_SUCCESS:
            if (res.success) {
                const {data} = res;
                if (data) {
                    if (update) {
                        return <MenuResourceUpdateForm/>;
                    }
                    const {name, sn, url, icon, order} = data;
                    return (
                        <Form>
                            <div>
                                <FormItem label="名称：">
                                    <label className={style.formLable}>{name}</label>
                                </FormItem>
                                <FormItem label="标识符：">
                                    <label className={style.formLable}>{sn}</label>
                                </FormItem>
                                <FormItem label="url：">
                                    <label className={style.formLable}>{url}</label>
                                </FormItem>
                                <FormItem label="icon：">
                                    <label className={style.formLable}>{icon}</label>
                                </FormItem>
                                <FormItem label="排序号：">
                                    <label className={style.formLable}>{order}</label>
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button style={{ marginLeft: 8 }} onClick={showUpdatePage} size="default">
                                    修改
                                </Button>
                                <Popconfirm title="您确认删除?" onConfirm={() => remove(id)} okText="确认" cancelText="取消">
                                    <Button style={{ marginLeft: 8 }} size="default">
                                        删除
                                    </Button>
                                </Popconfirm>
                            </FormItem>
                        </Form>
                    );
                } else {
                    return <div>未获取到该菜单资源数据，请刷新后重试</div>;
                }
            } else {
                return <div>{res.errMessage}</div>;
            }

        case FIND_BY_ID_FOR_UNIFY_MENU_ERROR:
            return <div>加载失败</div>;
        default:
            getData(id);
            return <div>未加载数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {id, type, res, update} = state.uumsUnifyMenu;
    return {
        type: type,
        res: res,
        update: update,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {

    const getData = (id) => {
        dispatch(findByIdForUnifyMenu(id));
    };

    const showUpdatePage = () => {
        dispatch(showUpdatePageForUnifyMenu(true));
    };

    const remove = (id) => {
        api.menuResource.remove({ids: [id]})
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(resourceStructureActions.findResourceStructureInTree({}, false));
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

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(MenuResourceInfo));
