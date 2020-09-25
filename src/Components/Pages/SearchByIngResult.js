import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loading from '../Utility/Loading'
import DrinkList from '../Utility/DrinkList'

const SearchByIngResult = (props) => {
  console.log('props', props);
  const [searchResult, setSearchResult] = useState(null);

  let searchInput = props.location.state.searchTerm;
  console.log('searchinput is', searchInput);

  for (let i = 0; i < searchInput.length; i++) {
    if (searchInput[i] === ' ') {
      if (searchInput[i-1] === ',') {
        searchInput = searchInput.replace(searchInput[i], '')
      } else if (searchInput[i-1] !== ',') {
        searchInput = searchInput.replace(searchInput[i], '_')
      }
    }
  }

  console.log('searchinput is after loop is', searchInput);


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
