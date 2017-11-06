import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/logo.png';

const Header = () => (
  <header>
    <img className="icn-logo" src={Logo} alt="" />
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Projects</NavLink></li>
      <li><NavLink to="/contact">Contact Me</NavLink></li>
    </ul>
  </header>
);

export default Header;
