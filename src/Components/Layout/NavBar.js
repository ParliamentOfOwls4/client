import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </li>
        </div>
    )
}

export default NavBar