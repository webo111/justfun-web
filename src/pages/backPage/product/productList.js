import React from 'react';
import { Row, Col, Card } from 'antd';
import Topbar from '../components/Topbar';
import Title from '../components/Title';
import EchartsArea from '../../backPageAdmin/components/charts/EchartsArea';

export default class productList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: []
        }
    }
    componentDidMount() {

    }

    render() {
        return(
            <div id="userList">
                <Topbar/>
                <Title title="商品展示"/>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="区域图" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}