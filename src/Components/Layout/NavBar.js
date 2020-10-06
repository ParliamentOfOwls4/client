import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JiggyLogoTransparent.png';
import Hamburger from './Hamburger'
import Menu from './Menu'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
    <div className='nav'>
      <a href='/'>
        <img className='logo' src={logo} alt='logo' height='85' width='110' />
      </a>
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
      <Hamburger open={open} setOpen={setOpen} />
    </div>
     {open ? <Menu open={open} setOpen={setOpen} /> : ''}
     </div>
  );
};

export default NavBar;
