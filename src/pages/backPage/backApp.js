import React from 'react';
import Sidebar from './components/Sidebar';
import './less/App.less';
import 'antd/dist/antd.css';

class BackApp extends React.Component {
  render() {
    return (
      <div className="BackApp">
          <Sidebar/>
          <div id="rightWrap">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default BackApp;