import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './less/App.less';
import 'antd/dist/antd.css';
import Home from './home';
import UserList from './user/userList';
import RoleList from './user/roleList';
import PermissionList from './user/permissionList';
import productList from './product/productList';
import productStatistics from './product/productStatistics';


class BackApp extends React.Component {
  render() {
    return (
      <div className="BackApp">
          <Sidebar/>
          <div id="rightWrap">
              <Switch>
                  <Route exact path="/back" component={Home} />
                  <Route exact path="/back/home" component={Home} />
                  <Route exact path="/back/system/user" component={UserList} />
                  <Route exact path="/back/system/role" component={RoleList} />
                  <Route exact path="/back/system/permission" component={PermissionList} />
                  <Route exact path="/back/product/productList" component={productList} />
                  <Route exact path="/back/product/productStatistics" component={productStatistics} />
              </Switch>
          </div>
      </div>
    );
  }
}

export default BackApp;