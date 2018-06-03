import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './pages/frontPage/index';
import CompanyInfo from './pages/frontPage/pages/companyInfo';
import CompanyCulture from './pages/frontPage/pages/companyCulture';
import BusinessSystem from './pages/frontPage/pages/businessSystem';
import InvestorRelations from './pages/frontPage/pages/investorRelations';

import AdminApp from './pages/backPageAdmin/index';
import 'antd/dist/antd.css';
import './pages/frontPage/style/index.less';

import BackApp from './pages/backPage/backApp';

class App extends React.Component {
  render() {
    return (
        <Switch>
            <Route exact path="/front" component={Index} />
            <Route path='/front/companyInfo' component={CompanyInfo}/>
            <Route path='/front/companyCulture' component={CompanyCulture}/>
            <Route path='/front/businessSystem' component={BusinessSystem}/>
            <Route path='/front/investorRelations' component={InvestorRelations}/>

            <Route path="/back" component={BackApp} />

            <Route path="/app" component = {AdminApp} />
        </Switch>
    );
  }
}

export default App;