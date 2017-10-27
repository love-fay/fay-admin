/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import OrgRoleTable from './orgRoleTable';
import OrgRoleSearch from './orgRoleSearch';

export default () => {
    return (
        <Card>
            <OrgRoleSearch />
            <div className={style.roleTable}>
                <OrgRoleTable />
            </div>
        </Card>
    );
}
