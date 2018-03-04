import React from 'react';
import 'antd/dist/antd.css';
import './style/index.less';

class FrontApp extends React.Component {
  render() {
    return (
      <div className="FrontApp">
          {this.props.children}
      </div>
    );
  }
}

export default FrontApp;