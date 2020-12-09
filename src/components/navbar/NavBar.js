import React from 'react';
import logo from '../../shared/images/logo.svg';
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="apply">Apply</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
