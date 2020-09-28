import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
  const [searchIng, setSearchIng] = useState('');
  const [redirect, setRedirect] = useState(false);

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
    setSearchIng('');
  }

  return (
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
  );
};

export default SearchBar;
