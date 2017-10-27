/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import UnAssignUserSearch from './unAssignUserSearch';
import style from './style.css';
import UnAssignUserTable from './unAssignUserTable';

export default ({type, dataId}) => {
    return <Card title="待分配的用户" bordered={false}>
            <UnAssignUserSearch type={type} dataId={dataId}/>
            <div className={style.unAssignUserTable}>
                <UnAssignUserTable type={type} dataId={dataId} />
            </div>
        </Card>;
};
