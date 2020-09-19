import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import { ImListNumbered } from 'react-icons/im';
import { GrWorkshop } from 'react-icons/gr';

// import { Link } from 'react-router-dom'

const Drink = (props) => {
  const [drink, setDrink] = useState(null);
  console.log('Drink.js props ', props);

  // Set up "Lookup full cocktail details by ID" request to API
  // with id from clicked Link component in Home.js (params)
  const config = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
      useQueryString: true,
    },
    params: {
      i: `${props.location.state.id}`,
    },
  };

  // Only thing I changed, added useEffect to call api
  useEffect(() => {
    axios(config)
      .then((res) => setDrink(res.data.drinks))
      .catch(console.error);
  }, []);
  console.log(drink);
  // console.log(drink[0].strDrinkThumb);
  if (!drink) {
    console.log('waittt...');
  }

  const ingredients = [];
  if (drink) {
    console.log(drink);
    for (let i = 1; i <= 20; i++) {
      if (drink[0][`strIngredient${i}`]) {
        ingredients.push(
          `${drink[0][`strIngredient${i}`]} - ${drink[0][`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  }

  console.log(ingredients);
  return (
    <div className='single-drink'>
      <h1>{drink ? drink[0].strDrink : ''}</h1>
      <img
        src={drink ? `${drink[0].strDrinkThumb}` : ''}
        height='250'
        width='250'
        alt='pic'
      />
      <p>
        <FaGlassMartiniAlt /> {'   '}
        <strong>Best Served In:</strong> {drink ? drink[0].strGlass : ''}
      </p>
      <p>
        <ImListNumbered />
        {'   '} <strong>Ingredients:</strong>{' '}
        {ingredients.map((ing) => `${ing}`).join('\n')}
      </p>
      <p>
        <GrWorkshop /> {'   '}
        <strong>Instructions:</strong> {drink ? drink[0].strInstructions : ''}
      </p>
    </div>
  );
};
export default Drink;
