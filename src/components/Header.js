import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/dark-logo.png';

const hdrRibbon1 = () => (
  document.getElementById('hdrWrapper').className = "ribbon-syl-1"
)
const hdrRibbon2 = () => (
  document.getElementById('hdrWrapper').className = "ribbon-syl-2"
)
const hdrRibbon3 = () => (
  document.getElementById('hdrWrapper').className = "ribbon-syl-3"
)
const hdrRibbon4 = () => (
  document.getElementById('hdrWrapper').className = "ribbon-syl-4"
)
const Header = () => (

  <header id="hdrWrapper">
    <span className="navImgContainer">
      <img className="icn-logo" src={Logo} alt="" />
    </span>
    <ul className="main-nav">
      <li><NavLink onClick={hdrRibbon1} exact to="/">Home</NavLink></li>
      <li><NavLink onClick={hdrRibbon2} to="/about">About</NavLink></li>
      <li><NavLink onClick={hdrRibbon3} to="/projects">Projects</NavLink></li>
      <li><NavLink onClick={hdrRibbon4} to="/contact">Contact Me</NavLink></li>
    </ul>
  </header>
);

export default Header;
