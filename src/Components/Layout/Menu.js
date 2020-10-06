import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({ open, onClick }) => {
    return (
        <div className='menu-container' open={open}>
            <Link
                className='menu-links'
                style={{ color: '#fff', textDecoration: 'none' }}
                to='/'
                onClick={onClick}
            >
                HOME
            </Link>
            <Link
                className='menu-links'
                style={{ color: '#fff', textDecoration: 'none' }}
                to='/about'
                onClick={onClick}
            >
                ABOUT
            </Link> 
        </div>
    )
}

export default Menu