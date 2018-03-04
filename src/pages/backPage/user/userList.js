import React from 'react';
import $ from 'jquery';
import Topbar from '../components/Topbar';
import Title from '../components/Title';

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
            let data = [{name:"wemin"}];//JSON.parse(res);
            console.info(data[0].name);
            // 需要绑定this
            this.setState({
                tData:data
            })
        }.bind(this))
    }

    render() {
        const userList = (
            <ol>
                {this.state.tData.map((u,i)=>
                    <li key={i}>{u.name}</li>
                )}
            </ol>
        );
        return(
            <div id="userList">
                <Topbar/>
                <Title title="用户管理"/>
                {userList}
            </div>
        );
    }
}