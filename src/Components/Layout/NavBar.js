import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/JiggyLogoTransparent.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Loading from '../Utility/Loading';
import DrinkList from '../Utility/DrinkList';

const NavBar = () => {
  const [searchIng, setSearchIng] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (event) => {
    setSearchIng(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  };

  const onSearch = () => {
    // let searchInput = props.location.state.searchInput;

    for (let i = 0; i < searchIng.length; i++) {
      if (searchIng[i] === ' ') {
        if (searchIng[i - 1] === ',') {
          searchIng = searchIng.replace(searchIng[i], '');
        } else if (searchIng[i - 1] !== ',') {
          searchIng = searchIng.replace(searchIng[i], '_');
        }
      }
    }

    const searchByIngConfig = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
        'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
        useQueryString: true,
      },
      params: {
        i: searchIng,
      },
    };

    axios(searchByIngConfig)
      .then((res) => setSearchResult(res.data.drinks))
      .catch(console.error);

    if (!searchResult) {
      return <Loading />;
    } else {
      return <DrinkList drinkData={searchResult} />;
    }
  };

  return (
    <div className='nav'>
      <a href='/'>
        <img className='logo' src={logo} alt='logo' height='85' width='110' />
      </a>
      <Form className='search-bar-container'>
        <Form.Control
          type='text'
          onKeyPress={onKeyPress}
          value={searchIng}
          onChange={handleChange}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          placeholder='Search by ingredients...'
        />
        <Button type='submit' as={Link} onSubmit={onSearch}>
          Search
        </Button>
      </Form>
      <Link
        className='navLinks'
        style={{ color: '#fff', textDecoration: 'none' }}
        to='/'
      >
        HOME
      </Link>
      <Link
        className='navLinks'
        style={{ color: '#fff', textDecoration: 'none' }}
        to='/about'
      >
        ABOUT
      </Link>
    </div>
  );
};

export default NavBar;
