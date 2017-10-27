/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import AssignUserSearch from './assignUserSearch';
import style from './style.css';
import AssignUserTable from './assignUserTable';

export default ({type, dataId}) => {
    return <Card title="已分配的用户" bordered={false}>
                <AssignUserSearch type={type} dataId={dataId}/>
                <div className={style.assignUserTable}>
                    <AssignUserTable type={type} dataId={dataId} />
                </div>
            </Card>;
}
