import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import EditListPage from '../components/EditListPage';
import NewList from '../components/NewList';
import ItemList from '../components/ItemList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute 
                    path="/"
                    component={LoginPage}
                    exact={true}
                />
                <PrivateRoute 
                    path="/new/:material_type/:material_size/:fitting_type"
                    component={ItemList}
                />
                <PrivateRoute 
                    path="/new/:material_type/:material_size"
                    component={NewList}
                />
                <PrivateRoute 
                    path="/new/:material_type"
                    component={NewList}
                />
                <PrivateRoute 
                    path="/new/"
                    component={NewList}
                />
                <PrivateRoute 
                    path="/dashboard"
                    component={DashboardPage}
                    exect={true}
                />
                <PrivateRoute
                    path="/list/:id"
                    component={EditListPage}
                />
                <Route 
                    component={NotFoundPage}
                />
                
            </Switch>
        </div>
    </Router>
);

export default AppRouter;