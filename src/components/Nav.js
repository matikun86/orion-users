import React from 'react';
import { Router, IndexLink } from 'react-router';

const toggleNavbar = () => {
  document.querySelector('.navbar').classList.toggle('collapsed');
}

function Nav(props) {
  return (
  <nav className="navbar navbar-default collapsed">
    <div className="container-fluid">
      <div className="navbar-header">
        <button onClick={toggleNavbar} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Contacts Managment Tool</a>
      </div>

      <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeClassName="active">List</IndexLink></li>
          <li><IndexLink to="/letters" activeClassName="active">Letters</IndexLink></li>
          <li><IndexLink to="/map" activeClassName="active">Map</IndexLink></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Nav;