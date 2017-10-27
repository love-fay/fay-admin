> 写这篇文章之时，是我将自己的一个大型项目中的一部分从纯react改造成结合redux和react-router4,并实现了按需加载，也就是code spliting，在国内论坛上很少讲到code spliting，有可能是大家都去看了redux的作者Dan Abramov在GitHub上写了关于redux code spliting的伪代码：
(不得不说，Dan Abramov长得很帅！)
[GitHub上的伪代码](https://gist.github.com/gaearon/0a2213881b5d53973514)

reducers.js
```
import { combineReducers } from 'redux';
import users from './reducers/users';
import posts from './reducers/posts';

export default function createReducer(asyncReducers) {
  return combineReducers({
    users,
    posts,
    ...asyncReducers
  });
}
```
routes.js

```
import { injectAsyncReducer } from './store';

function createRoutes(store) {
  // ...

  const CommentsRoute = {
    // ...

    getComponents(location, callback) {
      require.ensure([
        './pages/Comments',
        './reducers/comments'
      ], function (require) {
        let Comments = require('./pages/Comments').default;
        let commentsReducer = require('./reducers/comments').default;

        injectAsyncReducer(store, 'comments', commentsReducer);
        callback(null, Comments);
      })
    }
  };

  // ...
}
```
store.js

```
import { createStore } from 'redux';
import createReducer from './reducers';

export default function configureStore() {
  let store = createStore(createReducer());
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
```
> 但是这部分代码并没有测试过，可它给了我思路，让我按照这个思路实现了我项目的设计，首先，我来发下我的版本号：

```
"devDependencies": {
    "ajv": "^5.2.2",
    "autoprefixer": "^7.1.4",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-import": "^1.4.0",
    "babel-plugin-react-transform": "^2.0.2",
    "babel-plugin-syntax-dynamic-import": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.6.0",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.14",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^0.11.2",
    "gzip-loader": "0.0.1",
    "html-webpack-plugin": "^2.24.1",
    "json-loader": "^0.5.4",
    "less": "^2.7.2",
    "less-loader": "^4.0.5",
    "path": "^0.12.7",
    "postcss-loader": "^2.0.6",
    "react-transform-hmr": "^1.0.4",
    "source-map-loader": "^0.2.1",
    "style-loader": "^0.18.2",
    "uglifyjs-webpack-plugin": "^0.4.6",
    "webpack": "^3.5.6",
    "webpack-dashboard": "^1.0.0-5",
    "webpack-dev-server": "^2.7.1"
  },
  "dependencies": {
    "antd": "^2.13.1",
    "babel-polyfill": "^6.26.0",
    "babel-runtime": "^6.26.0",
    "bundle-loader": "^0.5.5",
    "history": "^4.7.2",
    "node-waves": "^0.7.5",
    "prop-types": "^15.5.10",
    "react": "^15.6.1",
    "react-addons-perf": "^15.4.2",
    "react-cookie": "^1.0.5",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.6",
    "react-router-dom": "^4.2.2",
    "react-router-redux": "^5.0.0-alpha.6",
    "redux": "^3.7.2",
    "redux-immutable-state-invariant": "^2.0.0",
    "redux-logger": "^3.0.6",
    "redux-saga": "^0.15.6",
    "reselect": "^3.0.1",
    "superagent": "^3.6.0",
    "webpack-require-http": "^0.4.3"
  }
```
> 好了，我来说下我的设计，我这里使用react-redux，在顶级组件处加入`<Provider store={store}>`，然后在需要引入store信息的子组件处利用它提供的connect方法将store派发下去，这里派发是根据上下文context。项目中少不了用到路由，这时候，我使用了react-router-redux，在总的reducer中加入routerReducer，然后在写路由组件的部分的顶级处使用`<ConnectedRouter history={history}>`，到这里，我先粘贴下这部分代码：

reducers.js:

```
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default function createReducer(asyncReducers) {
    const reducers = {
        ...asyncReducers,
        router: routerReducer
    };
    return combineReducers(reducers);
}
```
Store.js

```
export default function configureStore() {
    let store = createStore(createReducer(), {}, storeEnhancers);
    store.asyncReducers = {};
    store.asyncSagas = {};
    store.sagaMiddleware = sagaMiddleware;
    return store;
}
```
route.js

```
<Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
            <Route path='/404' component={E404}/>
        </Switch>
    </ConnectedRouter>
</Provider>
```
> 这部分设计完事后，以角色管理这个页面为例，这个组件我们来实现按需加载，我是按照模块来组织我的代码的，先来看下角色管理模块的代码排版：
## 
![这里写图片描述](http://img.blog.csdn.net/20171027085218664?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZmF5NDYyMjk4MzIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
> 我处理异步请求这边使用的是redux-sagas，这个东西我个人觉得优于thunk和promise，所以你会看到有sagas.js这个文件，那么bundle和lazy这两个文件是干嘛的？没错，是用于code spliting的，主要分为3个文件，一个是展示视图的bundle.js，一个是每个模块资源的bundle.js，一个是每个模块懒加载的lazy.js，这是我自己设计的，如果谁有更好的可以介绍下，一起探讨。先看下排版：
## 
![这里写图片描述](http://img.blog.csdn.net/20171027092113391?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZmF5NDYyMjk4MzIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
视图bundle.js: (根据react-router4提出的bundle.js进行的改造)

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends Component {

    static propTypes = {
        load: PropTypes.any,
        children: PropTypes.any,
    };

    static contextTypes = {
        store: React.PropTypes.object
    };

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null,
    };

    componentWillMount () {
        this.load(this.props);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load (props) {
        this.setState({
            mod: null,
        });
        props.load(this.context.store, (mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod['default'] ? mod['default'] : mod,
            });
        });
    }

    render () {
        return this.state.mod ? this.props.children(this.state.mod) : <div></div>;
    }
}

export default Bundle;
```
角色管理模块的bundle.js:(主要是将需要懒加载的资源整合进来)

```
import roleSagas from './sagas';
import roleReducer from './reducer';
import view from './views/role';
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignUserReducer, sagas as assignUserSagas} from '../assignUser';
import {reducer as unAssignUserReducer, sagas as unAssignUserSagas} from '../unAssignUser';
import {ReducerNames} from '../../constants';
const roleName = ReducerNames.uums.role;
const authName = ReducerNames.uums.auth;
const assignUserName = ReducerNames.uums.assignUser;
const unAssignUserName = ReducerNames.uums.unAssignUser;

const reducer = {
    [roleName]: roleReducer,
    [assignUserName]: assignUserReducer,
    [unAssignUserName]: unAssignUserReducer,
    [authName]: authReducer
};

const sagas = {
    [roleName]: roleSagas,
    [assignUserName]: assignUserSagas,
    [unAssignUserName]: unAssignUserSagas,
    [authName]: authSagas
};

export {sagas, reducer, view};
```
用于赖加载的lazy.js：

```
import React from 'react';
import Bundle from '../../bundle/views/bundle';
import load from 'bundle-loader?lazy&name=[Role]!./bundle';
import {injectAsyncStore} from '../../Store';

export default (props) => {
    return (
        <Bundle load={(store, cb) => {
            load((target) => {
                const {reducer, view, sagas} = target;
                injectAsyncStore(store, reducer, sagas);
                cb(view);
            })
        }}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};
```
> 这里还要说明下Store.js文件里的一个替换reducer的方法，主要利用redux官方api的replaceReducer方法，还有我的sagas也进行了按需加载，所以我的Store里有这样一个方法：

```
export function injectAsyncStore(store, asyncReducers, sagas) {
    injectAsyncReducers(store, asyncReducers);
    injectAsyncSagas(store, sagas);
}

export function injectAsyncReducers(store, asyncReducers) {
    let flag = false;
    if (asyncReducers) {
        for (let key in asyncReducers) {
            if(Object.prototype.hasOwnProperty.call(asyncReducers, key)) {
                if (!store.asyncReducers[key]) {
                    store.asyncReducers[key] = asyncReducers[key];
                    flag = true;
                }
            }
        }
        flag && store.replaceReducer(createReducer(store.asyncReducers));
    }
}

export function injectAsyncSagas(store, sagas) {
    if (sagas) {
        for (let key in sagas) {
            if(Object.prototype.hasOwnProperty.call(sagas, key)) {
                if (!store.asyncSagas[key]) {
                    store.asyncSagas[key] = sagas[key];
                    store.sagaMiddleware.run(sagas[key]);
                }
            }
        }
    }
}
```
角色管理的index.js:

```
import * as actions from './actions';
import view from './lazy';

export {actions, view};
```
> 其他页面引入角色管理视图的时候，只要引入index.js中的view就可以了。
这里要说下模块资源整合的bundle.js，它里面多了3个视乎跟这个模块不相关的reducer和sagas:

```
import {reducer as authReducer, sagas as authSagas} from '../resource/auth';
import {reducer as assignUserReducer, sagas as assignUserSagas} from '../assignUser';
import {reducer as unAssignUserReducer, sagas as unAssignUserSagas} from '../unAssignUser';
```
> 这是为什么，因为我们这个角色管理的组件中需要内嵌auth、assignUser、unAssignUser这三个组件，而这三个组件有它们自己的reducer和sagas，如果在角色管理处不定义它们，当在角色管理页面加载它们的时候会执行store.replaceReducer，这里的store是上下文里的，也就是视图bundle.js中：
## 
![这里写图片描述](http://img.blog.csdn.net/20171027093241304?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZmF5NDYyMjk4MzIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
## 
> 这里一定要定义contextTypes，不然获取不到this.context，当然官方没有提供这个api，也不推荐使用，但是按需加载就得需要它，并且我们要谨慎使用它即可，因为this.context一旦改变，它关联的上下文就会重新render，所以加载角色管理页面的时候，把它所要使用到的reducer和sagas也都关联进去，这样在使用auth组件的时候就已经存在相关的reducer和sagas，不需要再改变上下文的store了。当然组件设计很重要，如果不合理会导致页面不可控。这里基本就将code spliting介绍完了。
## 
> 这里补充下关于组件设计，使用reactjs的时候组件设计一定要足够的扁平化，也就是平级，这样就很少出现父组件中嵌套子组件，而父组件更新的时候，子组件也跟着更新，实际上子组件并不想更新。当然遇到逼不得已嵌套的情况的时候，可以使用shouldComponentUpdate这个组件存在时期的生命周期来控制子组件是否render。

## 
> 时间关系，我暂时没有单独写一个可运行的示例，这里我将项目的一部分上传到了GitHub上，不可运行，只供参考，当然这些代码是在我本地运行成功的。[代码参考](https://github.com/love-fay/fay-admin)
