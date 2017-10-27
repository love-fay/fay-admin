/**
 * Created by feichongzheng on 16/12/18.
 */

import 'node-waves/src/less/waves.less';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'react-router-redux';

import {Layout12} from '../layout';
import { E404, E401D3, E504 } from '../error';
import {view as Home} from '../home';
import {view as Login} from '../login';
import {UumsRouterPaths} from '../constants';

import configureStore from '../Store';
let store = configureStore();
import {uumsRouter, app, org, group, position, orgRole, person, role, user, menuResource, controllerResource, unifyManage} from '../uums';

const UumsRouter = uumsRouter.view;
const App = app.view;
const Org = org.view;
const Group = group.view;
const Position = position.view;
const OrgRole = orgRole.view;
const User = user.view;
const Role = role.view;
const Person = person.view;
const MenuResource = menuResource.view;
const ControllerResource = controllerResource.view;
const UnifyManage = unifyManage.view;

const history = createBrowserHistory();

export default () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/504" component={E504}/>
                    <Route path='/404' component={E404}/>
                    <Route path='/401D3' component={E401D3}/>
                    <Route path='/login' component={Login}/>
                    <Layout12>
                        <UumsRouter>
                            <Route path={UumsRouterPaths.APP} component={App}/>
                            <Route path={UumsRouterPaths.ORG} component={Org}/>
                            <Route path={UumsRouterPaths.GROUP} component={Group}/>
                            <Route path={UumsRouterPaths.POSITION} component={Position}/>
                            <Route path={UumsRouterPaths.ORGROLE} component={OrgRole}/>
                            <Route path={UumsRouterPaths.USER} component={User}/>
                            <Route path={UumsRouterPaths.ROLE} component={Role}/>
                            <Route path={UumsRouterPaths.PERSON} component={Person}/>
                            <Route path={UumsRouterPaths.MENURESOURCE} component={MenuResource}/>
                            <Route path={UumsRouterPaths.CONTROLLERRESOURCE} component={ControllerResource}/>
                            <Route path={UumsRouterPaths.UNIFYMANAGE} component={UnifyManage}/>
                            <Route exact strict path="/" component={Home}/>
                        </UumsRouter>
                    </Layout12>
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}
