/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import RoleTable from './roleTable';
import RoleSearch from './roleSearch';

export default () => {
    return (
        <Card>
            <RoleSearch />
            <div className={style.roleTable}>
                <RoleTable />
            </div>
        </Card>
    );
}
