import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
    return (
        <div className='menu-container' open={open}>
            <Link
                className='menu-links'
                style={{ color: '#fff', textDecoration: 'none' }}
                to='/'
            >
                HOME
            </Link>
            <Link
                className='menu-links'
                style={{ color: '#fff', textDecoration: 'none' }}
                to='/about'
            >
                ABOUT
            </Link> 
        </div>
    )
}

export default Menu