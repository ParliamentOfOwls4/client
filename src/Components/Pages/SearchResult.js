// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import Loading from '../Utility/Loading';
// import DrinkList from '../Utility/DrinkList';

// const SearchByIngResult = (props) => {
//   const [searchResult, setSearchResult] = useState(null);
//   console.log(props);
// let searchInput = props.location.state.searchInput;

// for (let i = 0; i < searchInput.length; i++) {
//   if (searchInput[i] === ' ') {
//     if (searchInput[i - 1] === ',') {
//       searchInput = searchInput.replace(searchInput[i], '');
//     } else if (searchInput[i - 1] !== ',') {
//       searchInput = searchInput.replace(searchInput[i], '_');
//     }
//   }
// }

//   const searchByIngConfig = {
//     method: 'GET',
//     url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
//     headers: {
//       'content-type': 'application/octet-stream',
//       'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
//       'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
//       useQueryString: true,
//     },
//     params: {
//       i: searchInput,
//     },
//   };

//   useEffect(() => {
//     axios(searchByIngConfig)
//       .then((res) => setSearchResult(res.data.drinks))
//       .catch(console.error);
//     // eslint-disable-next-line
//   }, []);

//   if (!searchResult) {
//     return <Loading />;
//   } else {
//     return <DrinkList drinkData={searchResult} />;
//   }
// };

// export default SearchByIngResult;
