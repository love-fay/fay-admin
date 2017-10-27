/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {view as UnitInfo} from '../unitInfo';
import Col from 'antd/lib/col';
import 'FayAntd/col/style/index.js';
import {connect} from 'react-redux';

const Unit = ({unitInfoOrder}) => {
    return (
        <Col span={9} order={unitInfoOrder}>
            <UnitInfo/>
        </Col>
    );
};

const mapStateToProps = (state) => {
    const {from} = state.uumsUnifyManage;
    return {
        unitInfoOrder: from === 'ORG' ? 2 : 4,
    }

};

export default connect(mapStateToProps)(Unit);
