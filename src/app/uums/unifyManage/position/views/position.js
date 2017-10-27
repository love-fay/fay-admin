/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import PositionInfo from './PositionInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;
import {connect} from 'react-redux';
import {changeActiveForUnifyPosition} from '../actions';
import {PersonSaveForm} from '../../person';

const Position = ({activeKey, id, onChange}) => {
    return <Tabs
        size="small"
        activeKey={activeKey}
        onChange={onChange}
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <PositionInfo/>
        </TabPane>
        <TabPane tab="新增人员" key="2">
            <PersonSaveForm positionId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {activeKey, id} = state.uumsUnifyPosition;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyPosition(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Position);
