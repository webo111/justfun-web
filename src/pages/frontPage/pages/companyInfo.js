import React from 'react';
import { Layout, Menu, Col, Row, Icon } from 'antd';
import FrontHeader from '../components/FrontHeader';
import ContentInfo from '../pages/contentInfo';

const { Header, Footer, Content, Sider } = Layout;

export default class CompanyInfo extends React.Component {
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
                                            defaultSelectedKeys={['1']}
                                            defaultOpenKeys={['sub1']}
                                            style={{ height: '100%', borderRight: 0 }}
                                        >
                                            <Menu.Item key="companyInfo1">
                                                公司动态
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo2">
                                                发展历程
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo3">
                                                管理团队
                                            </Menu.Item>
                                            <Menu.Item key="companyInfo4">
                                                社会责任
                                            </Menu.Item>
                                        </Menu>
                                    </Sider>
                                    <Layout style={{ padding: '0' }}>
                                        <Content style={{ background: '#fff', margin: 0, minHeight: 280 }}>
                                            <ContentInfo/>
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