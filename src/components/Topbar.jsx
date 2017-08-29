import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a href="/personal">个人中心</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/login">退出登陆</a>
        </Menu.Item>
    </Menu>
);

export default class Topbar extends React.Component {
    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 35,
            borderBottom: '1px solid #ddd',
            paddingBottom: 5
        }
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