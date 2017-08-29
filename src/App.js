import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import './less/App.less';
import 'antd/dist/antd.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Sidebar/>
          <div id="rightWrap">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;