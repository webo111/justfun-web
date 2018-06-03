import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import AdminApp from './pages/backPageAdmin/index';
import Login from './pages/backPage/login';
//common
import NotFoundPage from './pages/nofind';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/front" push />} />
            <Route path="/front" component = {App} />
            <Route path="/back" component = {App} />
            <Route path="/app" component = {AdminApp} />
            <Route path="/login" component = {Login} />
            <Route path='/404' component={NotFoundPage} />
            <Redirect from='*' to='/404' />
        </Switch>
    </Router>
    , document.querySelector('#root')
);