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
import AppUpdateForm from './appUpdateForm';
import 'FayAntd/popconfirm/style/index.js';
import {connect} from 'react-redux';
import {FIND_BY_ID_FOR_UNIFY_APP_FETCH, FIND_BY_ID_FOR_UNIFY_APP_SUCCESS, FIND_BY_ID_FOR_UNIFY_APP_ERROR} from '../actionTypes';
import {showUpdatePageForUnifyApp, findByIdForUnifyApp} from '../actions';

const AppInfo = ({id, type, res, update, showUpdatePage, getData}) => {
    switch (type) {
        case FIND_BY_ID_FOR_UNIFY_APP_FETCH:
            return <div>玩命地加载中</div>;
        case FIND_BY_ID_FOR_UNIFY_APP_SUCCESS:
            if (res.success) {
                const {data} = res;
                if (data) {
                    if (update) {
                        return <AppUpdateForm/>;
                    }
                    const {name, sn, url, description} = data;
                    return (
                        <Form>
                            <div>
                                <FormItem label="名称：">
                                    <label className={style.formLable}>{name}</label>
                                </FormItem>
                                <FormItem label="标识符：">
                                    <label className={style.formLable}>{sn}</label>
                                </FormItem>
                                <FormItem label="域名：">
                                    <label className={style.formLable}>{url}</label>
                                </FormItem>
                                <FormItem label="描述：">
                                    <label className={style.formLable}>{description}</label>
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button style={{ marginLeft: 8 }} onClick={showUpdatePage} size="default">
                                    修改
                                </Button>
                            </FormItem>
                        </Form>
                    );
                } else {
                    return <div>未获取到该应用系统数据，请刷新后重试</div>;
                }
            } else {
                return <div>{res.errMessage}</div>;
            }

        case FIND_BY_ID_FOR_UNIFY_APP_ERROR:
            return <div>加载失败</div>;
        default:
            getData(id);
            return <div>未加载数据</div>;
    }
};

const mapStateToProps = (state) => {
    const {id, type, res, update} = state.uumsUnifyApp;
    return {
        type: type,
        res: res,
        update: update,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {

    const getData = (id) => {
        dispatch(findByIdForUnifyApp(id));
    };

    const showUpdatePage = () => {
        dispatch(showUpdatePageForUnifyApp(true));
    };

    return {
        getData: getData,
        showUpdatePage: showUpdatePage,
    }
};

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(AppInfo));
