import React from 'react';
import { Card, Col, Row } from 'antd';

export default class ContentInfo2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <div id="ContentInfo">
                <div style={{ padding: '30px' }}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <Card bordered={false} title="公司简介" extra={<a href="#/more">更多</a>}>
                                发展历程
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" extra={<a href="#/more">More</a>} bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" extra={<a href="#/more">More</a>} bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{marginTop:'40px'}}>
                        <Col span={8}>
                            <Card title="公司简介" extra={<a href="#/more">更多</a>} bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" extra={<a href="#/more">More</a>} bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" extra={<a href="#/more">More</a>} bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}