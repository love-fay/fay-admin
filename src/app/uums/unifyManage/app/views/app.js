/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import AppInfo from './AppInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;
import {MenuResourceSaveForm} from '../../menuResource';
import {ControllerResourceSaveForm} from '../../controllerResource';
import {connect} from 'react-redux';
import {changeActiveForUnifyApp} from '../actions';

const App = ({activeKey, id, onChange}) => {
    return <Tabs
        activeKey={activeKey}
        onChange={onChange}
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <AppInfo/>
        </TabPane>
        <TabPane tab="新增菜单" key="2">
            <MenuResourceSaveForm appId={id}/>
        </TabPane>
        <TabPane tab="新增请求" key="3">
            <ControllerResourceSaveForm appId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyApp;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyApp(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
