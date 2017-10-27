/**
 * Created by feichongzheng on 17/6/9.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import 'FayAntd/row/style/index.js';
import 'FayAntd/col/style/index.js';
import { push } from 'react-router-redux';
import {user} from '../../resource';

const Home = ({goToLogin}) => {
    if (user.isLogin()) {
        return (
            <Row style={{textAlign: 'center'}}>
                <Col span={5}> 首页 </Col>
                <Col span={14}>
                    {/*<img src="assets/images/logo/logo-home.png" width="500px"/>*/}
                </Col>
            </Row>
        );
    } else {
        goToLogin();
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(push('/login'))
    }
};

export default connect(null, mapDispatchToProps)(Home);
