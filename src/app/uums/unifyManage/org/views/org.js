/**
 * Created by feichongzheng on 17/1/12.
 */
import React from 'react';
import OrgInfo from './orgInfo';
import Tabs from 'antd/lib/tabs';
import 'FayAntd/tabs/style/index.js';
const TabPane = Tabs.TabPane;
import OrgSaveForm from './orgSaveForm';
import {GroupSaveForm} from '../../group';
import {PositionSaveForm} from '../../position';
import {OrgRoleSaveForm} from '../../orgRole';
import {PersonSaveForm} from '../../person';
import {connect} from 'react-redux';
import {changeActiveForUnifyOrg} from '../actions';

const Org = ({id, activeKey, onChange}) => {
    return <Tabs size='small'
        activeKey={activeKey}
        onChange={onChange}
        tabPosition='right'
    >
        <TabPane tab="详情" key="1">
            <OrgInfo/>
        </TabPane>
        <TabPane tab="新增子机构" key="2">
            <OrgSaveForm orgId={id}/>
        </TabPane>
        <TabPane tab="新增部门" key="3">
            <GroupSaveForm orgId={id}/>
        </TabPane>
        <TabPane tab="新增职位" key="4">
            <PositionSaveForm orgId={id}/>
        </TabPane>
        <TabPane tab="新增角色" key="5">
            <OrgRoleSaveForm orgId={id}/>
        </TabPane>
        <TabPane tab="新增人员" key="6">
            <PersonSaveForm orgId={id}/>
        </TabPane>
    </Tabs>;
};

const mapStateToProps = (state) => {
    const {id, activeKey} = state.uumsUnifyOrg;
    return {
        activeKey: activeKey,
        id: id
    }
};

const mapDispatchToProps = (dispatch) => {
    const onChange = (activeKey) => {
        dispatch(changeActiveForUnifyOrg(activeKey));
    };

    return {
        onChange: onChange
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Org);
