import React from 'react';
import Topbar from '../../components/Topbar';
import {Title} from '../../components/Title';

export default class RoleList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div id="roleList">
                <Topbar/>
                { Title("角色管理") }
                this is RoleList.
            </div>
        );
    }
}