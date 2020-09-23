import React from 'react'
// import {image} from '../assets/DeadRabbitBar.jpeg'
import logo from '../assets/JiggyMainTransparent.png'

const Hero = () => {
    return (
        <div>
            <div className='hero-image'>
                <img className='hero-logo' src={logo}></img>
                <div className='hero-slogan'>Let's get this party started</div>
            </div>
            
        </div>
    )
}

export default Hero