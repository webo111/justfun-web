import React from 'react';
import { Row, Col, Card } from 'antd';
import Topbar from './components/Topbar';
import Title from './components/Title';
import BasicTable from '../backPageAdmin/components/tables/BasicTable';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="home">
                <Topbar />
                <Title title="首页"/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础表格" bordered={false}>
                                <BasicTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}