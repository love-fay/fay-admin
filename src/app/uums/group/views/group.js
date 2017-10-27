/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import GroupTable from './groupTable';
import GroupSearch from './groupSearch';

export default () => {
    return (
        <Card>
            <GroupSearch />
            <div className={style.groupTable}>
                <GroupTable />
            </div>
        </Card>
    );
}
