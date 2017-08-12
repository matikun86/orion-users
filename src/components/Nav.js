import React from 'react';
import { Router, IndexLink } from 'react-router';

function Nav(props) {
  return (
    <nav>
      <ul className="inline">
        <li><IndexLink to="/" activeClassName="current">List</IndexLink></li>
        <li><IndexLink to="/letters" activeClassName="current">Letters</IndexLink></li>
        <li><IndexLink to="/map" activeClassName="current">Map</IndexLink></li>
      </ul>
    </nav>
  );
}

export default Nav;