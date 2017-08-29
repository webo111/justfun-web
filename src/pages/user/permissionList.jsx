import React from 'react';
import Topbar from '../../components/Topbar';
import {Title} from '../../components/Title';

export default class PermissionList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div id="permissionList">
                <Topbar/>
                { Title("资源管理") }
                this is PermissionList.
            </div>
        );
    }
}