import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Menu.Item key="/back/home"><Icon type="home" />
                        <Link to="/back/home">
                            <span className="nav-text">首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商品管理</span></span>}>
                        <Menu.Item key="/back/product/productList">
                            <Link to="/back/product/productList">
                                <span className="nav-text">商品列表</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/back/product/productStatistics">
                            <Link to="/back/product/productStatistics">
                                <span className="nav-text">商品统计</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>用户管理</span></span>}>
                        <Menu.Item key="/back/system/user">
                            <Link to="/back/system/user">
                                <span className="nav-text">用户管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/back/system/role">
                            <Link to="/back/system/role">
                                <span className="nav-text">角色管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/back/system/permission">
                            <Link to="/back/system/permission">
                                <span className="nav-text">资源管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <style>
                    {`
                        .ant-menu-item > a{
                            display: inline-block;
                        }
                    `}
                </style>
            </div>
        );
    }
}