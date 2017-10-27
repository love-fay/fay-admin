/**
 * Created by feichongzheng on 17/1/9.
 */
import React, {Component} from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import {connect} from 'react-redux';
import {selectVisibleUnAssignPersonPage} from '../selector';
import {
    FIND_UNASSIGN_PERSON_FOR_PAGE_FETCH, FIND_UNASSIGN_PERSON_FOR_PAGE_SUCCESS, FIND_UNASSIGN_PERSON_FOR_PAGE_ERROR,
} from '../actionTypes';
import {findUnAssignPersonForPage, selectRowKeys} from '../actions';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
}, {
    title: '标识',
    dataIndex: 'sn',
}];

let tableState = {
    bordered: false,
    loading: false,
    pagination: false,
    size: 'middle',
    scroll: undefined,
};

let local = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
};

class AssignPersonTable extends Component {

    componentWillMount(){
        const {dataId, findData} = this.props;
        const params = {
            name: '',
            sn: '',
            dataId: dataId,
            number: 0,
            size: 10,
        };
        findData(params);
    }

    render () {
        const {uumsUnAssignPerson, onSelectChange, personData} = this.props;
        const {selectedRowKeys} = uumsUnAssignPerson;
        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectChange,
        };
        const type = uumsUnAssignPerson.type;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_UNASSIGN_PERSON_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_UNASSIGN_PERSON_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = personData(uumsUnAssignPerson);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_UNASSIGN_PERSON_FOR_PAGE_ERROR:
                tableState.loading = false;
                local.emptyText = uumsUnAssignPerson.message;
                break;
            default:
                tableState.loading = false;
                local.emptyText = '暂无数据';
                break;
        }
        return (
            <Table rowKey={(record) => record.id}
                   {...tableState}
                   columns={columns}
                   locale={local}
                   dataSource={dataSource}
                   pagination={pagination}
                   rowSelection={rowSelection}
                   style={{height: '270px'}}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        uumsUnAssignPerson: selectVisibleUnAssignPersonPage(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const findData = (params) => {
        const {type} = ownProps;
        dispatch(findUnAssignPersonForPage(type, params));
    };

    const personData = (uumsPerson) => {
        const result = uumsPerson.data;
        const params = uumsPerson.params;
        const success = result.success;
        if (success) {
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
                        findData(newParams);
                    },
                    onChange: (current) => {
                        let newParams = {};
                        Object.assign(newParams, params);
                        newParams.number = current - 1;
                        findData(newParams);
                    },
                },
                selectedRowKeys: [],
            };
        } else {
            local.emptyText = result.errMessage;
            return {
                dataSource: [],
                pagination: {},
                selectedRowKeys: [],
            };
        }
    };

    const onSelectChange = (selectedRowKeys) => {
        dispatch(selectRowKeys(selectedRowKeys));
    };

    return {
        findData: findData,
        personData: personData,
        onSelectChange: onSelectChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignPersonTable);
