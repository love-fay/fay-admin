/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Org from './org';
import Resource from './resource';
import Unit from './unit';
import Row from 'antd/lib/row';
import Card from 'antd/lib/card';
import 'FayAntd/row/style/index.js';
import 'FayAntd/card/style/index.js';

export default () => {
    return (
        <Card style={{minHeight:'600px'}}>
            <Row type="flex">
                <Org/>
                <Resource/>
                <Unit/>
            </Row>
        </Card>
    );
};
