import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JiggyLogoTransparent.png';
import Hamburger from './Hamburger'
import Menu from './Menu'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  
  const node = useRef(); 
  
  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    },
    [ref, handler],
    );
  };

  useOnClickOutside(node, () => setOpen(false));

  const onClick = () => {
    setOpen(false)
  }
  
  return (
    <div ref={node}>
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
     {open ? <Menu open={open} setOpen={setOpen} onClick={onClick}
/> : ''}
     </div>
  );
};

export default NavBar;
