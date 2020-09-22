import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap'

const Home = (props) => {
  console.log('props are', props)
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [alcohol, setAlcohol] = useState([]);

  // Make call to Liquor API to fetch 10 random drinks
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
      // set the randomDrinks state to the response that we get back from the API
      .then((res) => setRandomDrinks(res.data.drinks))
      .catch(console.error);
  };

  const onSelect = (e) => {
    // e.preventDefault()
    console.log('selection was made')
    console.log(e)
    setAlcohol(e)
  }

  console.log(alcohol)

  // Render a button to invoke the axios call from above
  // Display each drink as a Link
  // Pass the id down through the link, accessible on the next page via props.location.state.id 
  // Set each drink's key to the id of the drink in the database (appeasing the linter)
  return (
    <div>
      <Dropdown>
        <DropdownButton onSelect={onSelect} title='liquor'>
          <Dropdown.Item eventKey="vodka" href="/baseliquor/vodka">Vodka</Dropdown.Item>
          <Dropdown.Item eventKey="whiskey" href="/baseliquor/alcohol">Whiskey</Dropdown.Item>
          <Dropdown.Item eventKey="rum" href="#/action-3">Rum</Dropdown.Item>
          <Dropdown.Item eventKey="gin" href="#/action-4">Gin</Dropdown.Item>
          <Dropdown.Item eventKey="tequila" href="#/action-5">Tequila</Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <Button className='btn randomDrinksButton' type='submit' variant='secondary' onClick={tenDrinks}>Get 10 random cocktails</Button>

      {randomDrinks.map((drink) => (
        <ul>
          <li key={drink.idDrink}>
            <Link to={{ pathname: `/drink/${drink.idDrink}`, state: { id: `${drink.idDrink}` } }} key={drink.idDrink}>
              {drink.strDrink}
            </Link>
          </li>
        </ul>
      ))}

    </div>
  );
};

export default Home 
