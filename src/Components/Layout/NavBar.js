import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JiggyLogoTransparent.png';

const NavBar = () => {
  return (
    <div className='nav'>
      <a href='/'>
        <img className='logo' src={logo} alt='logo' height='85' width='110' />
      </a>
      {/* <p className='logo'>Jigr</p> */}
      <Link
        className='navLinks'
        style={{ color: '#fff', textDecoration: 'none' }}
        to='/'
      >
        HOME
      </Link>
      <Link
        className='navLinks'
        style={{ color: '#fff', textDecoration: 'none' }}
        to='/about'
      >
        ABOUT
      </Link>
    </div>
  );
};

export default NavBar;
