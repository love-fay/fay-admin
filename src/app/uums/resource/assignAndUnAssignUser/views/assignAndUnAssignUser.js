/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import 'FayAntd/row/style/index.js';
import 'FayAntd/col/style/index.js';
import {view as AssignUser} from '../../../assignUser';
import style from './style.css';
import {view as UnAssignUser} from '../../../unAssignUser';
import 'FayAntd/button/style/index.js';
import AssignButton from './assignButton';
import UnAssignButton from './unAssignButton';

export default ({dataId, type}) => {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row>
                <Col span="11">
                    <AssignUser type={type} dataId={dataId}/>
                </Col>
                <Col span="2" className={style.iconDiv}>
                    <UnAssignButton type={type} dataId={dataId}/>
                    <AssignButton type={type} dataId={dataId}/>
                </Col>
                <Col span="11">
                    <UnAssignUser type={type} dataId={dataId}/>
                </Col>
            </Row>
        </div>
    );
}