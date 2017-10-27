/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {findMenuResourceForTreeTable, expandMenuResourceForTreeTable} from '../actions';
import {FIND_MENURESOURCE_FOR_TREE_TABLE_FETCH, FIND_MENURESOURCE_FOR_TREE_TABLE_SUCCESS, FIND_MENURESOURCE_FOR_TREE_TABLE_ERROR} from '../actionTypes';
import {selectVisibleMenuResourceTreeTable} from '../selector';
import MenuResourceTableColumns from './menuResourceTableColumns';

let tableState = {
    bordered: false,
    loading: true,
    size: 'middle',
    scroll: undefined,
    expandedRowKeys: []
};

let local = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
};

let pagination = {
    defaultPageSize: 20,
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '30', '40'],
};

const MenuResourceTreeTable = ({uumsMenuResource, menuResourceData, ctrExpand, refresh}) => {
    const {type, expandedRowKeys, message, params} = uumsMenuResource;
    let dataSource = [];
    switch (type) {
        case FIND_MENURESOURCE_FOR_TREE_TABLE_FETCH:
            tableState.loading = true;
            local.emptyText = '获取数据中...';
            break;
        case FIND_MENURESOURCE_FOR_TREE_TABLE_SUCCESS:
            tableState.loading = false;
            const data = menuResourceData(uumsMenuResource);
            dataSource = data.dataSource;
            break;
        case FIND_MENURESOURCE_FOR_TREE_TABLE_ERROR:
            tableState.loading = false;
            local.emptyText = message;
            break;
        default:
            tableState.loading = false;
            local.emptyText = '暂无数据';
            break;
    }
    return <Table
        rowKey={(record) => record.treeObject.id}
        {...tableState}
        expandedRowKeys={expandedRowKeys}
        columns={MenuResourceTableColumns(() => refresh(params, expandedRowKeys))}
        dataSource={dataSource}
        pagination={pagination}
        locale={local}
        onRowDoubleClick={(record) => ctrExpand(record.treeObject.id, expandedRowKeys)}
        onExpand={(expanded, record) => ctrExpand(record.treeObject.id, expandedRowKeys)}/>;
};

const mapStateToProps = (state) => {
    return {
        uumsMenuResource: selectVisibleMenuResourceTreeTable(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    const menuResourceData = (uumsMenuResource) => {
        const result = uumsMenuResource.data;
        const success = result.success;
        if (success) {
            const data = result.data;
            local.emptyText = '暂无数据';
            return {
                dataSource: data,
            };
        } else {
            local.emptyText = result.errMessage;
            return {
                dataSource: [],
            };
        }
    };

    const ctrExpand = (key, expandedRowKeys) => {
        let keys = [];
        Object.assign(keys, expandedRowKeys);
        if (keys.includes(key)) {
            while (keys.indexOf(key) > -1) {
                keys.splice(keys.indexOf(key), 1);
            }
        } else {
            keys.splice(1, 0, key);
        }
        dispatch(expandMenuResourceForTreeTable(keys));
    };

    const refresh = (params, expandedRowKeys) => {
        dispatch(findMenuResourceForTreeTable(params, expandedRowKeys));
    };

    refresh({}, []);

    return {
        refresh: refresh,
        menuResourceData: menuResourceData,
        ctrExpand: ctrExpand
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuResourceTreeTable);
