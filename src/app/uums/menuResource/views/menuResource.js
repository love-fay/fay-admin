/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import MenuResourceTreeTable from './menuResourceTreeTable';
import MenuResourceSearch from './menuResourceSearch';

export default () => {
    return (
        <Card>
            <div>
                <MenuResourceSearch />
            </div>
            <div className={style.menuResourceTable}>
                <MenuResourceTreeTable />
            </div>
        </Card>
    );
}
