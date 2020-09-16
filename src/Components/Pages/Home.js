import React, { useState } from 'react';
import axios from 'axios';

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
      .then((res) => console.log(randomDrinks))
      // .then((random) => console.log(randomDrinks))
      .catch(console.error);

    console.log(randomDrinks[0]);
  };

  return (
    <div>
      <button onClick={tenDrinks}>Get 10 random cocktails</button>
      {randomDrinks.map((drink) => (
        <div key={drink.idDrink}>{drink.strDrink}</div>
      ))}
    </div>
  );
};

export default Home;
