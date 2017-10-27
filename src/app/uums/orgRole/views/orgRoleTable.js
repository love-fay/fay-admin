/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {findOrgRoleForPage} from '../actions';
import {FIND_ORGROLE_FOR_PAGE_FETCH, FIND_ORGROLE_FOR_PAGE_SUCCESS, FIND_ORGROLE_FOR_PAGE_ERROR} from '../actionTypes';
import {selectVisibleOrgRolePage} from '../selector';
import OrgRoleTableColumns from './orgRoleTableColumns';

let tableState = {
    bordered: false,
    loading: true,
    pagination: true,
    size: 'middle',
    scroll: undefined,
};

let local = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
};

const OrgRoleTable = ({uumsOrgRole, orgRoleData, refresh}) => {
        const {type, params, message} = uumsOrgRole;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_ORGROLE_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_ORGROLE_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = orgRoleData(uumsOrgRole);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_ORGROLE_FOR_PAGE_ERROR:
                tableState.loading = false;
                local.emptyText = message;
                break;
            default:
                tableState.loading = false;
                local.emptyText = '暂无数据';
                break;
        }
        return (
            <Table rowKey={(record) => record.id}
                   {...tableState}
                   columns={OrgRoleTableColumns(() => refresh(params))}
                   locale={local}
                   dataSource={dataSource}
                   pagination={pagination} />
        );
};

const mapStateToProps = (state) => {
    return {
        uumsOrgRole: selectVisibleOrgRolePage(state),
    };
};

const mapDispatchToProps = (dispatch) => {

    const orgRoleData = (uumsOrgRole) => {
        const result = uumsOrgRole.data;
        const success = result.success;
        if (success) {
            const {params} = uumsOrgRole;
            const data = result.data;
            local.emptyText = '暂无数据';
            return {
                dataSource: data.pageData,
                pagination: {
                    current: data.currentPage + 1,
                    showQuickJumper: true,
                    total: data.totalRows,
                    pageSize: data.pageSize,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30', '40'],
                    onShowSizeChange: (current, pageSize) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        newParams.size = pageSize;
                        dispatch(findOrgRoleForPage(newParams));
                    },
                    onChange: (current) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        dispatch(findOrgRoleForPage(newParams));
                    },
                },
            };
        } else {
            local.emptyText = result.errMessage;
            return {
                dataSource: [],
                pagination: {},
            };
        }
    };

    const refresh = (params) => {
        dispatch(findOrgRoleForPage(params));
    };

    refresh({number: 0, size: 20});

    return {
        refresh: refresh,
        orgRoleData: orgRoleData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrgRoleTable);
