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
import {FIND_ORG_STRUCTURE_IN_TREE_FETCH, FIND_ORG_STRUCTURE_IN_TREE_SUCCESS, FIND_ORG_STRUCTURE_IN_TREE_ERROR} from '../actionTypes';
import {selectVisibleUnifyOrgStructure} from '../selector';
import {connect} from 'react-redux';
import {findOrgStructureInTree, searchForOrgStructure, expandKeysForOrgStructure, updateRenderForOrgStructure} from '../actions';
import {actions as resourceStructureActions} from '../../resourceStructure';
import {actions as orgActions} from '../../org';
import {actions as groupActions} from '../../group';
import {actions as positionActions} from '../../position';
import {actions as orgRoleActions} from '../../orgRole';
import {actions as personActions} from '../../person';
import {actions as unitInfoActions} from '../../unitInfo';
import {unifyManageOrder} from '../../actions';
import {UnifyType, StructureType} from '../../constants';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const OrgStructure = ({uumsUnifyOrgStructure, onChange, onExpand, onSelect, generateList}) => {
    const {type, message, expandedKeys, autoExpandParent, searchValue} = uumsUnifyOrgStructure;
    let loading;
    let data = [];

    const loop = (data) => data.map((item) => {
        const treeObject = item.treeObject;
        if (treeObject) {
            const id = treeObject.id;
            const key = treeObject.name;
            const type = treeObject.type;
            if (id && key && type) {
                let typeHtml = type === 'ORG'
                    ? <Tag color="#108ee9">机构</Tag>
                    : (type === 'GROUP' ? <Tag color="#87d068">部门</Tag>
                        : (type === 'POSITION' ? <Tag color="#2db7f5">职位</Tag>
                            : (type === 'ORGROLE' ? <Tag color="orange">角色</Tag>
                                : (type === 'USER' ? <Tag color="#f50">人员</Tag> : ''))));
                let children = item.children;
                const index = key.indexOf(searchValue);
                const beforeStr = key.substr(0, index);
                const afterStr = key.substr(index + searchValue.length);
                const title = index > -1
                    ? (
                        <span>
                    {typeHtml}
                            {beforeStr}
                            <span style={{ color: '#f50' }}>{searchValue}</span>
                            {afterStr}
                </span>
                    )
                    : <span>{typeHtml}{key}</span>;
                if (children) {
                    return (
                        <TreeNode key={type + '_' + id} title={title}>
                            {loop(children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={type + '_' + id} title={title} />;
            }
        }
    });

    let treeNodes;
    let flag = false;

    switch (type) {
        case FIND_ORG_STRUCTURE_IN_TREE_FETCH:
            loading = true;
            treeNodes = '获取数据中...';
            break;
        case FIND_ORG_STRUCTURE_IN_TREE_SUCCESS:
            const result = uumsUnifyOrgStructure.data;
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
        case FIND_ORG_STRUCTURE_IN_TREE_ERROR:
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
                <Alert style={{ width: 200 }} message="组织列表" type="info" />
                <Search style={{ width: 200 }} placeholder="Search" onChange={(e) => onChange(e, data)} />
                <Tree
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onSelect={onSelect}
                >
                    {treeNodes}
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
        uumsUnifyOrgStructure: selectVisibleUnifyOrgStructure(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {

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

    const onExpand = (expandedKeys) => {
        dispatch(expandKeysForOrgStructure(expandedKeys, false));
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
        dispatch(searchForOrgStructure(expandedKeys, value, true));
    };

    const onSelect = (selectedKeys) => {
        if (selectedKeys.length > 0) {
            const [data] = selectedKeys;
            const arr = data.split('_');
            const [type, id, parentType, parentId] = arr;
            dispatch(updateRenderForOrgStructure(false));
            dispatch(unifyManageOrder(StructureType.ORG));
            dispatch(resourceStructureActions.findAuthedForResourceStructure({dataId: id, form: type}));
            dispatch(unitInfoActions.changeForUnitInfo(type));
            switch (type) {
                case UnifyType.ORG:
                    dispatch(orgActions.changeIdForUnifyOrg(id));
                    break;
                case UnifyType.GROUP:
                    dispatch(groupActions.changeIdForUnifyGroup(id));
                    break;
                case UnifyType.POSITION:
                    dispatch(positionActions.changeIdForUnifyPosition(id));
                    break;
                case UnifyType.ORGROLE:
                    dispatch(orgRoleActions.changeIdForUnifyOrgRole(id));
                    break;
                case UnifyType.USER:
                    dispatch(personActions.changeIdForUnifyPerson(id, parentType, parentId));
                    break;
                default :
                    break;
            }

        }
    };

    const getData = () => {
        dispatch(findOrgStructureInTree({}, true));
    };

    generateList([]);
    getData();

    return {
        onExpand: onExpand,
        onChange: onChange,
        onSelect: onSelect,
        generateList: generateList,
        getData: getData
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrgStructure);
