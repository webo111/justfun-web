import React from 'react';
import { browserHistory } from 'react-router';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const logo = require('../images/logo.png');


export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current:document.cookie.split(";")[0].split("=")[1]
        }
    }
    changeCookie = (v) => {
        document.cookie = "nowKey=" + v;
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
        this.changeCookie(e.key);
        if(e.key == "home"){
            browserHistory.push('/');
        }else if(e.key == 'user'){
            browserHistory.push('user');
        }else if(e.key == 'role'){
            browserHistory.push('role');
        }else if(e.key == 'permission'){
            browserHistory.push('permission');
        }
    }
    componentDidMount() {
        var now = window.location.pathname.substring(1);
        now = now === '' ? 'home' : now;
        this.changeCookie(now);
        this.setState({ current: now });
    }
    render(){
        return(
            <div id="leftMenu">
                <img src={logo} width="50" id="logo" alt="logo"/>
                <Menu onClick={this.handleClick} style={{ width: 146 }} mode="vertical">
                    <Menu.Item key="home"><Icon type="home" />首页</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>航班查询</span></span>}>
                        <Menu.Item key="1">AV</Menu.Item>
                        <Menu.Item key="2">FD</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>用户管理</span></span>}>
                        <Menu.Item key="user">用户管理</Menu.Item>
                        <Menu.Item key="role">角色管理</Menu.Item>
                        <Menu.Item key="permission">资源管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}