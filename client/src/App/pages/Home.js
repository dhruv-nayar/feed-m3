import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


class Home extends Component {
  render() {
    return (
    <div className="App">
      {/* Link to List.js */}
      <Navbar/>
    </div>
    );
  }
}
export default Home;
