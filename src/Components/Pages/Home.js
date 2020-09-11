import React, { useState } from 'react'
import NavBar from '../Layout/NavBar'
import axios from 'axios'
import RandomDrinks from '../Drinks/RandomDrinks'


const Home = () => {
    return (
        <div>
            <NavBar />
        <button>
            Get 10 random cocktails
        </button>
        
           <RandomDrinks /> 
        </div>
    )
}

export default Home
