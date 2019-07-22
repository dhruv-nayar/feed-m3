// src/App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Home from './pages/Home';
import Inventory from './components/Inventory';

const config = {
  issuer: 'https://dev-510263.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oay8z7zujX06wgZR356'
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
          <Route path='/' exact={true} component={Home}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
          <Route path='/inventory' exact={true} component={Inventory}/>
        </Security>
      </Router>
    );
  }
}

export default App;
