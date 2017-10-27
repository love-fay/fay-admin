/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import MenuResourceInfo from './MenuResourceInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;
import {MenuResourceSaveForm} from '../../menuResource';
import {ControllerResourceSaveForm} from '../../controllerResource';
import {connect} from 'react-redux';
import {changeActiveForUnifyMenu} from '../actions';

const MenuResource = ({activeKey, id, onChange}) => {
    return <Tabs
        activeKey={activeKey}
        onChange={onChange}
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <MenuResourceInfo/>
        </TabPane>
        <TabPane tab="新增子菜单" key="2">
            <MenuResourceSaveForm menuId={id} />
        </TabPane>
        <TabPane tab="新增请求" key="3">
            <ControllerResourceSaveForm menuId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyMenu;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyMenu(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuResource);
