import React, { useState, useEffect } from 'react';
import Loading from '../Utility/Loading';
import DrinkList from '../Utility/DrinkList';
import { getSearchResult } from '../Config'

const SearchByIngResult = (props) => {
  const [searchResult, setSearchResult] = useState(null);

  let searchInput = props.location.state.searchTerm;

  for (let i = 0; i < searchInput.length; i++) {
    if (searchInput[i] === ' ') {
      if (searchInput[i - 1] === ',') {
        searchInput = searchInput.replace(searchInput[i], '');
      } else if (searchInput[i - 1] !== ',') {
        searchInput = searchInput.replace(searchInput[i], '_');
      }
    }
  }

  useEffect(() => {
    getSearchResult(searchInput)
      .then((res) => setSearchResult(res.data.drinks))
      .catch(console.error);
    // eslint-disable-next-line
  }, []);

  if (!searchResult) {
    return <Loading />;
  } else {
    return <DrinkList drinkData={searchResult} />;
  }
};

export default SearchByIngResult;
