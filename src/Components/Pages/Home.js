import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import DrinkList from '../Utility/DrinkList';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [searchIng, setSearchIng] = useState('');
  const [redirect, setRedirect] = useState(false);

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

  const handleChange = (event) => {
    setSearchIng(event.target.value);
  };

  const searchByIng = (event) => {
    event.preventDefault();
    let isSpaces = searchIng.split('').every((char) => char === ' ');
    // If user hasn't typed anything, don't let them hit enter and go to empty search result page
    if (searchIng === '') {
      setRedirect(false);
    } else if (isSpaces) {
      setRedirect(false);
    } else {
      setRedirect(true);
    }
  };

  if (redirect) {
    return (
      <Redirect
        to={{ pathname: '/search/result', state: { searchTerm: searchIng } }}
      />
    );
  }
  return (
    <div>
      <Dropdown>
        <DropdownButton title='liquor'>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: '/baseliquor/alcohol',
              state: { selection: 'Vodka' },
            }}
            eventKey='vodka'
          >
            Vodka
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: '/baseliquor/alcohol',
              state: { selection: 'Scotch' },
            }}
            eventKey='scotch'
          >
            Scotch
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: '/baseliquor/alcohol',
              state: { selection: 'Rum' },
            }}
            eventKey='rum'
          >
            Rum
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: '/baseliquor/alcohol',
              state: { selection: 'Gin' },
            }}
            eventKey='gin'
          >
            Gin
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to={{
              pathname: '/baseliquor/alcohol',
              state: { selection: 'Tequila' },
            }}
            eventKey='tequila'
          >
            Tequila
          </Dropdown.Item>
        </DropdownButton>
      </Dropdown>
      <Form className='search-bar-container'>
        <Form.Control
          value={searchIng}
          onChange={handleChange}
          onSubmit={searchByIng}
          placeholder='Search by ingredients...'
        />
        <Button type='submit' onClick={searchByIng}>
          Search
        </Button>
      </Form>
      <Button
        className='btn random-drinks-button'
        type='submit'
        variant='secondary'
        onClick={tenDrinks}
      >
        Get 10 random cocktails
      </Button>
      <DrinkList drinkData={randomDrinks} />
    </div>
  );
};

export default Home;
