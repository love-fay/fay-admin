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
import {expandMenuForAuth, checkMenuForAuth, selectMenuForAuth, findMenuForAuth, changeMenuForAuth} from '../actions';
import {FIND_MENU_FOR_AUTH_FETCH, FIND_MENU_FOR_AUTH_SUCCESS, FIND_MENU_FOR_AUTH_ERROR} from '../actionTypes';

class Menu extends Component {

    constructor(props){
        super(props);
        const {appId, getData} = props;
        getData(appId);
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
        const {menuType, fetchSuccess, dataSource, err, expandedKeys, autoExpandParent, checkedKeys, selectedKeys, onExpand, onCheck, onSelect} = this.props;
        switch (menuType) {
            case FIND_MENU_FOR_AUTH_FETCH:
                return <div>菜单资源数据获取中...</div>;
            case FIND_MENU_FOR_AUTH_SUCCESS:
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
            case FIND_MENU_FOR_AUTH_ERROR:
                return <div>菜单资源数据获取失败</div>;
            default:
                return <div>准备获取数据</div>;
        }
    }
}

const mapStateToProps = (state) => {
    const {appId, menuType, menuDataSource, menuSuccess, menuErr, menuExpandedKeys, menuAutoExpandParent, menuCheckedKeys, menuSelectedKeys} = state.uumsAuth;
    return {
        appId: appId,
        menuType: menuType,
        expandedKeys: menuExpandedKeys,
        autoExpandParent: menuAutoExpandParent,
        checkedKeys: menuCheckedKeys,
        selectedKeys: menuSelectedKeys,
        dataSource: menuDataSource,
        fetchSuccess: menuSuccess,
        err: menuErr
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const onExpand = (expandedKeys) => {
        dispatch(expandMenuForAuth(expandedKeys));
    };

    const onCheck = (checkedKeys) => {
        const {type, dataId} = ownProps;
        const params = {dataId: dataId, menuIds: checkedKeys};
        switch (type) {
            case FilterType.ORG:
                org.addMenu(params);
                break;
            case FilterType.GROUP:
                group.addMenu(params);
                break;
            case FilterType.POSITION:
                position.addMenu(params);
                break;
            case FilterType.ORGROLE:
                orgRole.addMenu(params);
                break;
            case FilterType.USER:
                user.addMenu(params);
                break;
            case FilterType.ROLE:
                role.addMenu(params);
                break;
            case FilterType.PERSON:
                person.addMenu(params);
                break;
            default:
                break;
        }
        dispatch(checkMenuForAuth(checkedKeys));
    };

    const onSelect = (selectedKeys) => {
        dispatch(selectMenuForAuth(selectedKeys));
        dispatch(changeMenuForAuth(selectedKeys[0]));
    };

    const getData = (appId) => {
        const {type, dataId} = ownProps;
        const params = {appId: appId, dataId: dataId};
        dispatch(findMenuForAuth(type, params));
    };

    return {
        onExpand: onExpand,
        onCheck: onCheck,
        onSelect: onSelect,
        getData: getData
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
