/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import style from './style.css';
import PositionTable from './positionTable';
import PositionSearch from './positionSearch';

export default () => {
    return (
        <Card>
            <PositionSearch />
            <div className={style.positionTable}>
                <PositionTable />
            </div>
        </Card>
    );
}
