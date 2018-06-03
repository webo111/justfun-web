import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Layout, Menu, Col, Row, Icon } from 'antd';
import FrontHeader from '../components/FrontHeader';

import ContentInfo1 from './companyInfo/contentInfo1';
import ContentInfo2 from './companyInfo/contentInfo2';
import ContentInfo3 from './companyInfo/contentInfo3';
import ContentInfo4 from './companyInfo/contentInfo4';

const { Header, Footer, Content, Sider } = Layout;

export default class  BusinessSystem  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineHeight: '62px'
        }
    }

    setLineHeight(v){
        this.setState({lineHeight: v});
    }
    render(){
        return(
            <div id="frontIndex" >
                <Layout className="layout" >
                    <Header style={{position: 'fixed', width: '100%',height: this.state.lineHeight,lineHeight: this.state.lineHeight, zIndex: '100',background: 'rgba(16, 142, 233, 1)',color: '#fff',padding: '0 0 0 50px'}}>
                        <FrontHeader onHanderScroll={this.setLineHeight.bind(this)}/>
                    </Header>
                    <Content style={{ marginTop:70, background: '#fff'}}>
                        <Row type="flex" justify="center">
                            <Col span={18}>
                                <Layout>
                                    <Sider width={200} style={{ background: '#fff' }}>
                                        <Menu
                                            mode="inline"
                                            defaultSelectedKeys={['companyInfo1']}
                                            defaultOpenKeys={['sub1']}
                                            style={{ height: '100%', borderRight: 0 }}
                                        >
                                            <Menu.Item key="companyInfo1">
                                                <Link to="/front/businessSystem/1">
                                                    <span className="nav-text">业务体系</span>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo2">
                                                <Link to="/front/businessSystem/2">
                                                    <span className="nav-text">发展历程</span>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo3">
                                                <Link to="/front/businessSystem/3">
                                                    <span className="nav-text">管理团队</span>
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo4">
                                                <Link to="/front/businessSystem/4">
                                                    <span className="nav-text">社会责任</span>
                                                </Link>
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
                                    <Layout style={{ padding: '0' }}>
                                        <Content style={{ background: '#fff', margin: 0, minHeight: 280 }}>
                                            <Switch>
                                                <Route exact path="/front/businessSystem/1" component={ContentInfo1} />
                                                <Route exact path="/front/businessSystem/2" component={ContentInfo2} />
                                                <Route exact path="/front/businessSystem/3" component={ContentInfo3} />
                                                <Route exact path="/front/businessSystem/4" component={ContentInfo4} />
                                            </Switch>
                                        </Content>
                                    </Layout>
                                </Layout>
                            </Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        just-fun ©2018 Created by WM UED
                    </Footer>
                </Layout>
            </div>
        );
    }
}