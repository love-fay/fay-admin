/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import UnAssignPersonSearch from './unAssignPersonSearch';
import style from './style.css';
import UnAssignPersonTable from './unAssignPersonTable';

export default ({type, dataId}) => {
    return <Card title="待分配的人员" bordered={false}>
            <UnAssignPersonSearch type={type} dataId={dataId}/>
            <div className={style.userTable}>
                <UnAssignPersonTable type={type} dataId={dataId} />
            </div>
        </Card>;
};
