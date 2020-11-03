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
          <li>
            <a href="dawdawdwa">Not Found</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
