import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <p className='logo'>Jiggr'd</p>
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
