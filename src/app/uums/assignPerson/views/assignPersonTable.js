/**
 * Created by feichongzheng on 17/1/9.
 */
import React, {Component} from 'react';
import Table from 'antd/lib/table';
import 'FayAntd/table/style/index.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectVisibleAssignPersonPage} from '../selector';
import {
    FIND_ASSIGN_PERSON_FOR_PAGE_FETCH, FIND_ASSIGN_PERSON_FOR_PAGE_SUCCESS, FIND_ASSIGN_PERSON_FOR_PAGE_ERROR,
} from '../actionTypes';
import {findAssignPersonForPage, selectRowKeys} from '../actions';

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
        const {uumsAssignPerson, onSelectChange, personData} = this.props;
        const {selectedRowKeys} = uumsAssignPerson;
        const rowSelection = {
            selectedRowKeys,
            onChange: onSelectChange,
        };
        const type = uumsAssignPerson.type;
        let dataSource = [];
        let pagination = {};
        switch (type) {
            case FIND_ASSIGN_PERSON_FOR_PAGE_FETCH:
                tableState.loading = true;
                local.emptyText = '获取数据中...';
                break;
            case FIND_ASSIGN_PERSON_FOR_PAGE_SUCCESS:
                tableState.loading = false;
                const data = personData(uumsAssignPerson);
                dataSource = data.dataSource;
                pagination = data.pagination;
                break;
            case FIND_ASSIGN_PERSON_FOR_PAGE_ERROR:
                tableState.loading = false;
                local.emptyText = uumsAssignPerson.message;
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

AssignPersonTable.propTypes = {
    dataId: PropTypes.string,
    type: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        uumsAssignPerson: selectVisibleAssignPersonPage(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const findData = (params) => {
        const {type} = ownProps;
        dispatch(findAssignPersonForPage(type, params));
    };

    const personData = (uumsAssignPerson) => {
        const result = uumsAssignPerson.data;
        const params = uumsAssignPerson.params;
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignPersonTable);
