import React from 'react';
import $ from 'jquery';
import Topbar from '../components/Topbar';
import Title from '../components/Title';

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
            </div>
        );
    }
}