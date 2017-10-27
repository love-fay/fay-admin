/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import PersonInfo from './PersonInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;

export default () => {
    return <Tabs
        activeKey='1'
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <PersonInfo/>
        </TabPane>
    </Tabs>;
};
