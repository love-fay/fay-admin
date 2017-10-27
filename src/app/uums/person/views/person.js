/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import PersonTable from './personTable';
import PersonSearch from './personSearch';

export default () => {
    return (
        <Card>
            <PersonSearch />
            <div className={style.personTable}>
                <PersonTable />
            </div>
        </Card>
    );
}
