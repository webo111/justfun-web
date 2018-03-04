import React from 'react';
import { Layout, Col, Row } from 'antd';
import FrontHeader from './components/FrontHeader';
import Flexslider from './components/Flexslider';
import ContentInfo from './pages/contentInfo';

const { Header, Footer, Content } = Layout;

export default class Index extends React.Component {
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
                    <Content style={{ width: '100%', background: '#fff', padding: '0px'}}>
                        <Row gutter={24}>
                            <Col span={24}>
                                <Flexslider/>
                            </Col>
                            <Col span={24}>
                                <ContentInfo/>
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