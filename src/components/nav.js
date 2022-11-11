import React from 'react';
import { NavLink } from 'react-router-dom';
import '../modules-css/nav.css';

const Header = () => (
  <header className="header">
    <div className="nav-cont">
      <h1 className="logo">Math Magicians</h1>
      <div>
        <ul className="ul-nav">
          <li className="link-item">
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink to="/calculator">
              About
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink to="/quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
export default Header;
