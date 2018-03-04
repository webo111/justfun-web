import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory,hashHistory } from 'react-router';
//front
import FrontApp from './pages/frontPage/frontApp';
import Index from './pages/frontPage/index';
import CompanyInfo from './pages/frontPage/pages/companyInfo';
//back
import BackApp from './pages/backPage/backApp';
import Login from './pages/backPage/login';
import Home from './pages/backPage/home';
import UserList from './pages/backPage/user/userList';
import RoleList from './pages/backPage/user/roleList';
import PermissionList from './pages/backPage/user/permissionList';
import productList from './pages/backPage/product/productList';
import productStatistics from './pages/backPage/product/productStatistics';
//common
import NotFoundPage from './pages/nofind';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/login" component = {Login} />
        <Route path="/front" component={FrontApp} >
            <IndexRoute component={Index}/>
            <Route path='/front/companyInfo' component={CompanyInfo} />
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
        <Route path="/back" component={BackApp} >
            <IndexRoute component={Home}/>
            <Route path='/back/system/user' component={UserList} />
            <Route path='/back/system/role' component={RoleList} />
            <Route path='/back/system/permission' component={PermissionList} />
            <Route path='/back/product/productList' component={productList} />
            <Route path='/back/product/productStatistics' component={productStatistics} />

            {/* 404 */}
            <Route path='404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
        <Route path="/" component={FrontApp} >
            <IndexRoute component={Index}/>
            {/* 404 */}
            <Route path='404' component={NotFoundPage} />
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='404' />
        </Route>
    </Router>
    , document.querySelector('#root')
)
//ReactDOM.render(<App />, document.getElementById('root'));