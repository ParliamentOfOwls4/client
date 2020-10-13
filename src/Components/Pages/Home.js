import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import DrinkList from '../Utility/DrinkList';
import { GoSearch } from 'react-icons/go';
import { Redirect } from 'react-router-dom';
import { get10Drinks } from '../Config';

const Home = () => {
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [searchIng, setSearchIng] = useState('');
  const [redirect, setRedirect] = useState(false);

  const onClick = () => {
    get10Drinks()
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
      <div className='secondary-navbar'>
        <Dropdown>
          <DropdownButton title='Choose Alcohol'>
            <Dropdown.Item
              as={Link}
              to={{
                pathname: '/baseliquor/vodka',
                state: { selection: 'Vodka' },
              }}
              eventKey='vodka'
            >
              Vodka
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={{
                pathname: '/baseliquor/scotch',
                state: { selection: 'Scotch' },
              }}
              eventKey='scotch'
            >
              Scotch
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={{
                pathname: '/baseliquor/rum',
                state: { selection: 'Rum' },
              }}
              eventKey='rum'
            >
              Rum
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={{
                pathname: '/baseliquor/gin',
                state: { selection: 'Gin' },
              }}
              eventKey='gin'
            >
              Gin
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={{
                pathname: '/baseliquor/tequila',
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
          <button type='submit' className='btn-black' onClick={searchByIng}>
            <GoSearch />
          </button>
        </Form>
        <Button
          className='random-drinks-button'
          type='submit'
          onClick={onClick}
        >
          <span className='feeling-span'>Feeling</span> Jiggy?
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
