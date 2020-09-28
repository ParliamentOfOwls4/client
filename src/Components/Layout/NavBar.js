import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JiggyLogoTransparent.png';
import SearchBar from '../Utility/SearchBar';

const NavBar = () => {
  return (
    <div className='nav'>
      <a href='/'>
        <img className='logo' src={logo} alt='logo' height='85' width='110' />
      </a>
      <SearchBar />

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
