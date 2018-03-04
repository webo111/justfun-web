import React from 'react';
import { browserHistory,hashHistory } from 'react-router';
import { Menu, Dropdown, Icon } from 'antd';

export default class Topbar extends React.Component {
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key === "personal"){
            hashHistory.push('/');
        }else if(e.key === 'logout'){
            hashHistory.push('login');
        }
    }
    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 35,
            borderBottom: '1px solid #ddd',
            paddingBottom: 5
        };
        const menu = (
            <Menu onClick={this.handleClick}>
                <Menu.Item key="personal">个人中心</Menu.Item>
                <Menu.Item key="logout">退出登陆</Menu.Item>
            </Menu>
        );
      return (
          <div style={logoutWrap}>
              <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" href="#/">
                      Hover me <Icon type="down" />
                  </a>
              </Dropdown>
          </div>
      );
    }
}