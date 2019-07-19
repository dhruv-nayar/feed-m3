// src/Home.js

import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    // Redirect to '/' after login
    this.props.auth.login('/');
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout('/');
  }

  render() {
    return(
      <body>
      {getNavBar(this)}
      </body>
    )
  }


});

//this function returns the appropriate login/logout button depending on the user's state
function getAuthButton(user){
  if (user.state.authenticated === null) return null;
  return user.state.authenticated ?
    <button class = "btn btn-light" onClick={user.logout}>Logout</button> :
    <button class = "btn btn-success" onClick={user.login}>Login</button>;
}

function getNavBar(user){
  return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Feed.M3</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
  {getAuthButton(user)}
</nav>);
}
