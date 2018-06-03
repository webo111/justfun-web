import React, { Component } from 'react';
import { Layout, notification, Icon } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
/*import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';*/
import Routes from './routes';
const { Content, Footer } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {

    }
    componentDidMount() {

    }
    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式

    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <SiderCustom collapsed={this.state.collapsed}/>
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={{}} />
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <Routes auth={{}} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    React-Admin ©2018 Created by
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;
