import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap'
import Hero from '../Layout/Hero'
import { LoremIpsum } from 'react-lorem-ipsum'; 

const Home = (props) => {
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
    setAlcohol(e)
  }

  // Render a button to invoke the axios call from above
  // Display each drink as a Link
  // Pass the id down through the link, accessible on the next page via props.location.state.id 
  // Set each drink's key to the id of the drink in the database (appeasing the linter)
  return (
    <div>
      {/* <Hero /> */}
      <Dropdown>
        <DropdownButton onSelect={onSelect} title='liquor'>
          <Dropdown.Item as={Link} to={{ pathname: "/baseliquor/alcohol", state: { selection: 'vodka' } }} eventKey="vodka" >Vodka</Dropdown.Item>
          <Dropdown.Item as={Link} to={{ pathname: "/baseliquor/alcohol", state: { selection: 'scotch' } }} eventKey="scotch" >Scotch</Dropdown.Item>
          <Dropdown.Item as={Link} to={{ pathname: "/baseliquor/alcohol", state: { selection: 'rum' } }} eventKey="rum" >Rum</Dropdown.Item>
          <Dropdown.Item as={Link} to={{ pathname: "/baseliquor/alcohol", state: { selection: 'gin' } }} eventKey="gin" >Gin</Dropdown.Item>
          <Dropdown.Item as={Link} to={{ pathname: "/baseliquor/alcohol", state: { selection: 'tequila' } }} eventKey="tequila" >Tequila</Dropdown.Item>
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
          <LoremIpsum p={2} />
        </ul>
      ))}

    </div>
  );
};

export default Home 
