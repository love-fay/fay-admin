/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {findPositionForPage} from '../actions';
import {FIND_POSITION_FOR_PAGE_FETCH, FIND_POSITION_FOR_PAGE_SUCCESS, FIND_POSITION_FOR_PAGE_ERROR} from '../actionTypes';
import {selectVisiblePositionPage} from '../selector';
import PositionTableColumns from './positionTableColumns';

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

const PositionTable = ({uumsPosition, positionData, refresh}) => {
        const {type, params, message} = uumsPosition;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_POSITION_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_POSITION_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = positionData(uumsPosition);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_POSITION_FOR_PAGE_ERROR:
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
                   columns={PositionTableColumns(() => refresh(params))}
                   locale={local}
                   dataSource={dataSource}
                   pagination={pagination} />
        );
};

const mapStateToProps = (state) => {
    return {
        uumsPosition: selectVisiblePositionPage(state),
    };
};

const mapDispatchToProps = (dispatch) => {

    const positionData = (uumsPosition) => {
        const result = uumsPosition.data;
        const success = result.success;
        if (success) {
            const {params} = uumsPosition;
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
                        dispatch(findPositionForPage(newParams));
                    },
                    onChange: (current) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        dispatch(findPositionForPage(newParams));
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
        dispatch(findPositionForPage(params));
    };

    refresh({number: 0, size: 20});

    return {
        refresh: refresh,
        positionData: positionData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionTable);
