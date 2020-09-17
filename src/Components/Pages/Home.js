import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [randomDrinks, setRandomDrinks] = useState([]);

  const tenDrinks = async () => {
    const config = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
        useQueryString: true,
      },
    };

    await axios(config)
      .then((res) => setRandomDrinks(res.data.drinks))
      .then(() => console.log(randomDrinks))
      // .then((random) => console.log(randomDrinks))
      .catch(console.error);
  };

  return (
    <div>
      <Button className='randomDrinksButton' type='submit' variant='secondary' onClick={tenDrinks}>Get 10 random cocktails</Button>
      {randomDrinks.map((drink) => (
        <Link className='randomDrinkList' to='/:id' key={drink.idDrink}>{drink.strDrink}</Link>
      ))}
    </div>
  );
};

export default Home;
