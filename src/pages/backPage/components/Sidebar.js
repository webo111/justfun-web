import React from 'react';
import { browserHistory,hashHistory } from 'react-router';
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
        if(e.key === "/back/home"){
            hashHistory.push('/back');
        }else if(e.key === '/back/system/user'){
            hashHistory.push('/back/system/user');
        }else if(e.key === '/back/system/role'){
            hashHistory.push('/back/system/role');
        }else if(e.key === '/back/system/permission'){
            hashHistory.push('/back/system/permission');
        } else if(e.key === '/back/product/productList'){
            hashHistory.push('/back/product/productList');
        } else if(e.key === '/back/product/productStatistics'){
            hashHistory.push('/back/product/productStatistics');
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
                    <Menu.Item key="/back/home"><Icon type="home" />首页</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商品管理</span></span>}>
                        <Menu.Item key="/back/product/productList">商品列表</Menu.Item>
                        <Menu.Item key="/back/product/productStatistics">商品统计</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>用户管理</span></span>}>
                        <Menu.Item key="/back/system/user">用户管理</Menu.Item>
                        <Menu.Item key="/back/system/role">角色管理</Menu.Item>
                        <Menu.Item key="/back/system/permission">资源管理</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}