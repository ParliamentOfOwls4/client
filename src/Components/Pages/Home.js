import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import DrinkList from '../Utility/DrinkList';
import { Redirect } from 'react-router-dom';
import { get10Drinks } from '../Config'

const Home = () => {
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [searchIng, setSearchIng] = useState('');
  const [redirect, setRedirect] = useState(false);

  const onClick = () => {
    get10Drinks()
      .then((res) => setRandomDrinks(res.data.drinks))
      .catch(console.error);
  }

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
      <div className='secondary-navbar'>
        <Dropdown>
          <DropdownButton variant='outline-light' title='Choose Alcohol'>
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
            className='search-bar'
            value={searchIng}
            onChange={handleChange}
            onSubmit={searchByIng}
            placeholder='Search by ingredients...'
          />
          <Button
            type='submit'
            className='search-button'
            variant='outline-light'
            onClick={searchByIng}
          >
            Search
          </Button>
        </Form>
        <Button
          variant='outline-light'
          className='random-drinks-button'
          type='submit'
          onClick={onClick}
        >
          Feeling Jiggy?
        </Button>
      </div>

      {randomDrinks.length > 1 ? (
        <div className='random-drinks-message'>
          Check out these 10 random drinks!
        </div>
      ) : (
          ''
        )}
      <DrinkList drinkData={randomDrinks} />
    </div>
  );
};

export default Home;
