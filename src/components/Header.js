import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo">LOGO</span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact Me</NavLink></li>
    </ul>
  </header>
);

export default Header;
