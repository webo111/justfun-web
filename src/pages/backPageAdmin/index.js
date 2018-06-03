import React from 'react';
import App from './App';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="adminIndex" >
                <App/>
            </div>
        );
    }
}