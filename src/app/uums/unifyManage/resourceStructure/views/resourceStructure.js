/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Tree from 'antd/lib/tree';
import Input from 'antd/lib/input';
import 'FayAntd/tree/style/index.js';
import 'FayAntd/input/style/index.js';
import Alert from 'antd/lib/alert';
import Tag from 'antd/lib/tag';
import 'FayAntd/alert/style/index.js';
import 'FayAntd/tag/style/index.js';
import Spin from 'antd/lib/spin';
import 'FayAntd/spin/style/index.js';
import {api} from '../../../resource';
import {checkKeysForResourceStructure, searchForResourceStructure, expandKeysForResourceStructure, findResourceStructureInTree, changeCheckableForResourceStruture, findAuthedForResourceStructure} from '../actions';
import {connect} from 'react-redux';
import {selectVisibleUnifyResourceStructure} from '../selector';
import {FIND_RESOURCE_STRUCTURE_IN_TREE_FETCH, FIND_RESOURCE_STRUCTURE_IN_TREE_SUCCESS, FIND_RESOURCE_STRUCTURE_IN_TREE_ERROR} from '../actionTypes';
import {actions as unitInfoActions} from '../../unitInfo';
import {unifyManageOrder} from '../../actions';
import {actions as appActions} from '../../app';
import {actions as menuActions} from '../../menuResource';
import {actions as controllerActions} from '../../controllerResource';
import {UnifyType, StructureType} from '../../constants';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const ResourceStructure = ({uumsUnifyResourceStructure, onSelect, onCheck, onChange, generateList, onExpand}) => {
        const {type, message, expandedKeys, autoExpandParent, searchValue, checkedKeys, parentAuthedKeys, checkable} = uumsUnifyResourceStructure;

        let loading;
        let data = [];
        const loop = (data) => data.map((item) => {
            let id = item.treeObject.id;
            let key = item.treeObject.name;
            let type = item.treeObject.type;
            let children = item.children;
            let available = item.treeObject.available;
            let typeHtml = type === 'APP'
                ? <Tag color="#108ee9">系统</Tag>
                : (type === 'MENU' ? <Tag color="#87d068">菜单</Tag>
                    : (type === 'CONTROLLER' ? <Tag color="#2db7f5">请求</Tag> : ''));
            const nodeKey = available + '_' + type + '_' + id;
            const index = key.indexOf(searchValue);
            const beforeStr = key.substr(0, index);
            const afterStr = key.substr(index + searchValue.length);
            const parentResource = parentAuthedKeys.indexOf(nodeKey) > -1;
            let title = index > -1
                ? (
                    <span>
                        {typeHtml}
                        {beforeStr}
                        <span style={{ color: '#f50' }}>{searchValue}</span>
                        {afterStr}
                    </span>
                )
                : <span>{typeHtml}{key}</span>;
            title = parentResource ? <span style={{ color: '#40a5ed' }}>{title}</span> : title;
            let treeNodeKey = available + '_' + type + '_' + id;
            if (children) {
                return (
                    <TreeNode disableCheckbox={type === 'APP'} key={treeNodeKey} title={title}>
                        {loop(children)}
                    </TreeNode>
                );
            }
            return <TreeNode disableCheckbox={type === 'APP'} key={treeNodeKey} title={title}/>;
        });

        let treeNodes;
        let flag = false;

        switch (type) {
            case FIND_RESOURCE_STRUCTURE_IN_TREE_FETCH:
                loading = true;
                treeNodes = '获取数据中...';
                break;
            case FIND_RESOURCE_STRUCTURE_IN_TREE_SUCCESS:
                const result = uumsUnifyResourceStructure.data;
                const {success, errMessage} = result;
                if (success) {
                    data = result.data;
                    generateList(data);
                    treeNodes  = loop(data);
                    flag = true;
                } else {
                    treeNodes = errMessage;
                }
                loading = false;
                break;
            case FIND_RESOURCE_STRUCTURE_IN_TREE_ERROR:
                loading = false;
                treeNodes = message;
                break;
            default:
                loading = false;
                treeNodes = '暂无数据';
                break;
        }

        if (flag) {
            return (
                <Spin spinning={loading}>
                    <Alert style={{ width: 200 }} message="资源列表" type="info" />
                    <Search style={{ width: 200 }} placeholder="Search" onChange={(e) => onChange(e, data)} />
                    <Tree
                        checkStrictly
                        checkable={checkable}
                        showLine
                        onCheck={(checkedKeys, e) => onCheck(checkedKeys, e, uumsUnifyResourceStructure)}
                        onSelect={onSelect}
                        onExpand={onExpand}
                        expandedKeys={expandedKeys}
                        checkedKeys={checkedKeys}
                        autoExpandParent={autoExpandParent}
                    >
                        {loop(data)}
                    </Tree>
                </Spin>
            );
        } else {
            return (
                <Spin spinning={loading}>
                    <Alert style={{ width: 200 }} message={treeNodes} type="info" />
                </Spin>
            );
        }
};

const mapStateToProps = (state) => {
    return {
        uumsUnifyResourceStructure: selectVisibleUnifyResourceStructure(state)
    }
};

const mapDispatchToProps = (dispatch) => {

    const dataList = [];

    const generateList = (data) => {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const key = node.treeObject.id;
            const title = node.treeObject.name;
            dataList.push({ key, title });
            if (node.children) {
                generateList(node.children, key);
            }
        }
    };

    const getParentKey = (key, tree) => {
        let parentKey;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some((item) => item.treeObject.id === key)) {
                    let type = node.treeObject.type;
                    let id = node.treeObject.id;
                    parentKey = type + '_' + id;
                } else if (getParentKey(key, node.children)) {
                    parentKey = getParentKey(key, node.children);
                }
            }
        }
        return parentKey;
    };

    const onSelect = (selectedKeys) => {
        if (selectedKeys.length > 0) {
            const [data] = selectedKeys;
            const arr = data.split('_');
            const [available, type, id] = arr;
            if (available === '1') {
                dispatch(unifyManageOrder(StructureType.RESOURCE));
                dispatch(changeCheckableForResourceStruture(false));
                dispatch(unitInfoActions.changeForUnitInfo(type));
                switch (type) {
                    case UnifyType.APP:
                        dispatch(appActions.changeIdForUnifyApp(id));
                        break;
                    case UnifyType.MENU:
                        dispatch(menuActions.changeIdForUnifyMenu(id));
                        break;
                    case UnifyType.CONTROLLER:
                        dispatch(controllerActions.changeIdForUnifyController(id));
                        break;
                    default :
                        break;
                }
            }
        }
    };

    const onCheck = (checkedKeys, e, uumsUnifyResourceStructure) => {
        let key = e.node.props.eventKey;
        const {orgStructureId, orgStructureType} = uumsUnifyResourceStructure;
        let currentCheckedKeys = JSON.parse(JSON.stringify(uumsUnifyResourceStructure.checkedKeys));
        let checked = currentCheckedKeys.checked;
        let i;
        if (checked) {
            i = checked.lastIndexOf(key);
            (i > -1) ? checked.splice(i, 1) : (currentCheckedKeys.checked.push(key));
        } else {
            i = -1;
            currentCheckedKeys.checked = [key];
        }
        let [, type, id] = key.split('_');
        let dealType = i > -1 ? 'delete' : 'add';
        api.resource.changeAuthedResource({dataId: orgStructureId, dataType: orgStructureType, resourceId: id, resourceType: type, dealType: dealType});
        dispatch(checkKeysForResourceStructure(currentCheckedKeys));
    };

    const onChange = (e, data) => {
        const value = e.target.value;
        let expandedKeys;
        if (value === '') {
            expandedKeys = [];
        } else {
            expandedKeys = dataList.map((item) => {
                const title = item.title;
                const key = item.key;
                if (title.indexOf(value) > -1) {
                    return getParentKey(key, data);
                }
                return null;
            }).filter((item, i, self) => item && self.indexOf(item) === i);
        }
        dispatch(searchForResourceStructure(expandedKeys, value, true));
    };

    const onExpand = (expandedKeys) => {
        dispatch(expandKeysForResourceStructure(expandedKeys));
    };

    const getData = () => {
        dispatch(findResourceStructureInTree({}, true));
    };

    generateList([]);
    getData();

    return {
        onSelect: onSelect,
        onCheck: onCheck,
        onChange: onChange,
        generateList: generateList,
        onExpand: onExpand
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceStructure);
