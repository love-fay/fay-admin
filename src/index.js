/**
 * Created by feichongzheng on 16/12/7.
 */
import '../../fay-uc/src/view/fayUc/fayUc';
import React from 'react';
import {render} from 'react-dom';
import Index from './app/route';

if (typeof (FayUc) === 'object') {
    FayUc.init(() => {
        index();
    });
} else {
    index();
}


/**
 * 应用页面加载
 * @returns {void}
 */
function index () {
    render(<Index/>, document.getElementById('app'));
}
