import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Loading from '../Utility/Loading'
import DrinkList from '../Utility/DrinkList'

const SearchByIngResult = (props) => {
  console.log('props', props);
  const [searchResult, setSearchResult] = useState(null);

  const searchInput = props.location.state.searchTerm;
  console.log('searchinput is', searchInput);
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
      i: searchInput,
    },
  };

  useEffect(() => {
    axios(searchByIngConfig)
      .then((res) => setSearchResult(res.data.drinks))
      .catch(console.error);
  }, []);

  if (!searchResult) {
    return <Loading />;
  } else {
    console.log('test', searchResult);
    return (
      <DrinkList drinkData={searchResult} />
    )
  }
};



export default SearchByIngResult;
