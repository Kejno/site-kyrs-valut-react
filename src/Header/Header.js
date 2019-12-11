import React from 'react';
import './Header.css';

import Nav from '../Nav/Nav.js'

class Header extends React.Component {


  render() {


    return (
      <header>
        <div className="top-bar animate-dropdown"></div>
        <div className="main-header">
          <div className="container">
            <a href="/"><h1 className="site-title">React Lite Level</h1></a>

          </div>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;
