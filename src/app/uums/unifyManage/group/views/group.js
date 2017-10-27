/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import GroupInfo from './GroupInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;
import {connect} from 'react-redux';
import {changeActiveForUnifyGroup} from '../actions';
import {PositionSaveForm} from '../../position';
import {PersonSaveForm} from '../../person';

const Group = ({activeKey, id, onChange}) => {
    return <Tabs
        activeKey={activeKey}
        onChange={onChange}
        size="small"
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <GroupInfo/>
        </TabPane>
        <TabPane tab="新增职位" key="2">
            <PositionSaveForm groupId={id}/>
        </TabPane>
        <TabPane tab="新增人员" key="3">
            <PersonSaveForm groupId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyGroup;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyGroup(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
