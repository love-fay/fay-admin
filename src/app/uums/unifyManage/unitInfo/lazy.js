/**
 * Created by feichongzheng on 17/10/24.
 */
import React from 'react';
import Bundle from '../../../bundle/views/bundle';
import load from 'bundle-loader?lazy&name=[UnifyUnitInfo]!./bundle';
import {injectAsyncReducers} from '../../../Store';

export default (props) => {
    return (
        <Bundle load={(store, cb) => {
            load((target) => {
                const {reducer, view} = target;
                injectAsyncReducers(store, reducer);
                cb(view);
            })
        }}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};
