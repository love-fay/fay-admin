/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import {view as OrgStructure} from '../orgStructure';
import Col from 'antd/lib/col';
import 'FayAntd/col/style/index.js';

export default () => {
    return (
        <Col span={5} order={1}>
            <OrgStructure/>
        </Col>
    );
};
