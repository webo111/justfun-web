import React from 'react';
import Topbar from '../components/Topbar';
import {Title} from '../components/Title';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="home">
                <Topbar />
                { Title("首页") }
            </div>
        );
    }
}