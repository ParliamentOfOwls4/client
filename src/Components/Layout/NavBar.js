import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='logo' height='85' width='110' />
      {/* <p className='logo'>Jigr</p> */}
      <ul>
        <li className='navLinks'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='navLinks'>
          <Link to='/about'>ABOUT</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
