import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import App from './App';
import Login from './pages/login';
import Home from './pages/home';
import NotFoundPage from './pages/nofind';
import UserList from './pages/user/userList';
import RoleList from './pages/user/roleList';
import PermissionList from './pages/user/permissionList';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={browserHistory} >
        <Route path="/login" component = {Login} />
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path='user' component={UserList} />
            <Route path='role' component={RoleList} />
            <Route path='permission' component={PermissionList} />
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
    </Router>
    , document.querySelector('#root')
)
//ReactDOM.render(<App />, document.getElementById('root'));