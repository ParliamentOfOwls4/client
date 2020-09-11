import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomDrinks = () => {
    console.log('random button clicked')
    const [randomDrinks, setRandomDrinks] = useState([])

    useEffect(() => {
        axios({
            "method":"GET",
            "url":"https://the-cocktail-db.p.rapidapi.com/randomselection.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key":"ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b",
            "useQueryString":true
            }
        })
          .then(res => setRandomDrinks(res.data.drinks.strDrink))
          .catch(console.error)
      }, [])

        return (
            <div className='randomDrink'>
                <h3>
                    hello
                </h3>
            </div>
            
        )
}

export default RandomDrinks
