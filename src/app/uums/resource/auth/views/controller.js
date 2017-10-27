/**
 * Created by feichongzheng on 17/1/9.
 */
import React, {Component} from 'react';
import Tree from 'antd/lib/tree';
import 'FayAntd/tree/style/index.js';
const TreeNode = Tree.TreeNode;
import {org, group, position, orgRole, user, role, person} from '../../api';
import {FilterType} from '../../../constants';
import {connect} from 'react-redux';
import {expandControllerForAuth, checkControllerForAuth, selectControllerForAuth, findControllerForAuth} from '../actions';
import {FIND_CONTROLLER_FOR_AUTH_FETCH, FIND_CONTROLLER_FOR_AUTH_SUCCESS, FIND_CONTROLLER_FOR_AUTH_ERROR} from '../actionTypes';

class Controller extends Component {

    constructor (props) {
        super (props);
        const {appId, menuId, getData} = props;
        getData(appId, menuId);
    }

    loop = (data) => data && data.map((item) => {
        if (item.children && item.children.length > 0) {
            return (
                <TreeNode key={item.nodeId} title={item.nodeName}>
                    {this.loop(item.children)}
                </TreeNode>
            );
        }
        return <TreeNode key={item.nodeId} title={item.nodeName} />;
    });

    render () {
        const {controllerType, expandedKeys, autoExpandParent, checkedKeys, selectedKeys, dataSource, fetchSuccess, err, onExpand, onCheck, onSelect} = this.props;
        switch (controllerType) {
            case FIND_CONTROLLER_FOR_AUTH_FETCH:
                return <div>请求资源数据获取中...</div>;
            case FIND_CONTROLLER_FOR_AUTH_SUCCESS:
                if (fetchSuccess) {
                    return (
                        <Tree
                            checkable
                            checkStrictly
                            onExpand={onExpand} expandedKeys={expandedKeys}
                            autoExpandParent={autoExpandParent}
                            onCheck={onCheck} checkedKeys={checkedKeys}
                            onSelect={onSelect} selectedKeys={selectedKeys}
                        >
                            {this.loop(dataSource)}
                        </Tree>
                    );
                } else {
                    return <div>{err}</div>
                }
            case FIND_CONTROLLER_FOR_AUTH_ERROR:
                return <div>请求资源数据获取失败</div>;
            default:

                return <div>准备获取数据</div>;
        }
    }
}

const mapStateToProps = (state) => {
    const {appId, menuId, controllerType, controllerDataSource, controllerSuccess, controllerErr, controllerExpandedKeys, controllerAutoExpandParent, controllerCheckedKeys, controllerSelectedKeys} = state.uumsAuth;
    return {
        appId: appId,
        menuId: menuId,
        controllerType: controllerType,
        expandedKeys: controllerExpandedKeys,
        autoExpandParent: controllerAutoExpandParent,
        checkedKeys: controllerCheckedKeys,
        selectedKeys: controllerSelectedKeys,
        dataSource: controllerDataSource,
        fetchSuccess: controllerSuccess,
        err: controllerErr
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const onExpand = (expandedKeys) => {
        dispatch(expandControllerForAuth(expandedKeys));
    };

    const onCheck = (checkedKeys) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, controllerIds: checkedKeys};
        switch (type) {
            case FilterType.ORG:
                org.addController(params);
                break;
            case FilterType.GROUP:
                group.addController(params);
                break;
            case FilterType.POSITION:
                position.addController(params);
                break;
            case FilterType.ORGROLE:
                orgRole.addController(params);
                break;
            case FilterType.USER:
                user.addController(params);
                break;
            case FilterType.ROLE:
                role.addController(params);
                break;
            case FilterType.PERSON:
                person.addController(params);
                break;
            default:
                break;
        }
        dispatch(checkControllerForAuth(checkedKeys));
    };

    const onSelect = (selectedKeys) => {
        dispatch(selectControllerForAuth(selectedKeys));
    };

    const getData = (appId, menuId) => {
        const {type, dataId} = ownProps;
        console.log('controller:'+dataId);
        const params = {appId: appId, dataId: dataId, menuId: menuId};
        dispatch(findControllerForAuth(type, params));
    };

    return {
        onExpand: onExpand,
        onCheck: onCheck,
        onSelect: onSelect,
        getData: getData
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
