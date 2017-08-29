import React from 'react';
import $ from 'jquery';
import Topbar from '../../components/Topbar';
import {Title} from '../../components/Title';

export default class UserList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tData: []
        }
    }
    componentDidMount() {
        $.ajax({
            url:'/user/findAllUsers'
        })
        .done(function(res) {
            let data = JSON.parse('{"name":"wemin"}');
            alert(data.name);
            // 需要绑定this
            this.setState({
                tData:data.data
            })
        }.bind(this))
    }
    render() {
        return(
            <div id="userList">
                <Topbar/>
                { Title("用户管理") }
                this is userList.
            </div>
        );
    }
}