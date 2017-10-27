/**
 * Created by feichongzheng on 17/1/9.
 */
import React from 'react';
import Card from 'antd/lib/card';
import 'FayAntd/card/style/index.js';
import AssignPersonSearch from './assignPersonSearch';
import style from './style.css';
import AssignPersonTable from './assignPersonTable';

export default ({type, dataId}) => {
    return <Card title="已分配的人员" bordered={false}>
                <AssignPersonSearch type={type} dataId={dataId}/>
                <div className={style.assignPersonTable}>
                    <AssignPersonTable type={type} dataId={dataId} />
                </div>
            </Card>;
}
