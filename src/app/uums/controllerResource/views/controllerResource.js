/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import ControllerResourceTreeTable from './controllerResourceTreeTable';
import ControllerResourceSearch from './controllerResourceSearch';

export default () => {
    return (
        <Card>
            <div>
                <ControllerResourceSearch />
            </div>
            <div className={style.controllerResourceTable}>
                <ControllerResourceTreeTable />
            </div>
        </Card>
    );
}
