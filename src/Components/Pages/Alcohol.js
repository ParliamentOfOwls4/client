import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Loading from '../assets/Loading'
// import { selection } from './Home.js'

import axios from 'axios';

const Alcohol = (props) => {
  const [vodka, setVodka] = useState(null);
  const [vodkaDrinks, setVodkaDrinks] = useState(null);
//   const { alcohol } = 
  console.log('props are', props)
//   console.log(selection)
  // Make request to "Search cocktail by name" to get an "about this type of alcohol blurb"
//   const configVodka = {
//     method: 'GET',
//     url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
//     headers: {
//       'content-type': 'application/octet-stream',
//       'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
//       'x-rapidapi-key': '18340cd79amsh1c44c2fa78fcea5p1078b1jsn75937a334342',
//       'useQueryString': true,
//     },
//     params: {
//       "i": "vodka"
//     },
//   };

//   // try to modularize the request calls and make multiple axios calls in useEffect funciton

//   useEffect(() => {
//     axios(configVodka)
//       //   .then((res) => console.log(res))
//       .then((res) => setVodka(res.data.ingredients[0]))
//       .catch(console.error);
//   }, []);

//   const configVodkaDrinks = {
//     method: "GET",
//     url: "https://the-cocktail-db.p.rapidapi.com/filter.php",
//     headers: {
//       "content-type": "application/octet-stream",
//       "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
//       "x-rapidapi-key": "18340cd79amsh1c44c2fa78fcea5p1078b1jsn75937a334342",
//       "useQueryString": true
//     },
//     params: {
//       i: "Vodka"
//     }
//   };

//   useEffect(() => {
//     axios(configVodkaDrinks)
//       // .then((res) => console.log(res.data.drinks))
//       .then((res) => setVodkaDrinks(res.data.drinks))
//       .catch(console.error);
//   }, []);


  if (!vodka || !vodkaDrinks) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row>
          <Col>{vodka.strDescription}</Col>
          <Col>{
            vodkaDrinks.map((drink) => (
              <ul>
                <li key={drink.idDrink}>
                  <Link to={{ pathname: `/drink/${drink.idDrink}`, state: { id: `${drink.idDrink}` } }}>
                    {drink.strDrink}
                  </Link>
                </li>
              </ul>
            ))
          }</Col>
        </Row>
      </Container>
    );
  }
};

export default Alcohol