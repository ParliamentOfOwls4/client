import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [randomDrinks, setRandomDrinks] = useState([]);

  const tenDrinks = () => {
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

    axios(config)
      .then((res) => setRandomDrinks(res.data.drinks))
      .then((randomDrinks) => console.log(randomDrinks))
      .catch(console.error);

    const eachDrink = randomDrinks.map((drink) => (
      <div key={drink.idDrink}>{drink.strDrink}</div>
    ));

    return (
      <div className='randomDrink'>
        <h3>{eachDrink}</h3>
      </div>
    );
  };

  const onClick = () => {
    tenDrinks();
  };

  return (
    <div>
      <button onClick={onClick}>Get 10 random cocktails</button>
      {/* <RandomDrinks /> */}
    </div>
  );
};

export default Home;
