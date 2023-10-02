import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <>
      <Link className="LogoLink" to="/" exact="true">
        <img src={logo} className="Logo" alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
