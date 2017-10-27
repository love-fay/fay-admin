/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import OrgTreeTable from './orgTreeTable';
import OrgSearch from './orgSearch';

export default () => {
    return (
        <Card>
            <div>
                <OrgSearch />
            </div>
            <div className={style.orgContent}>
                <OrgTreeTable />
            </div>
        </Card>
    );
}
