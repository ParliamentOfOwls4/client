import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loading from '../Utility/Loading';
import axios from 'axios';

const Alcohol = (props) => {
  const [alcohol, setAlcohol] = useState(null);
  const [alcoholDrinks, setAlcoholDrinks] = useState(null);
  const selection = props.location.state.selection;

  // Make request to "Search cocktail by name" to get an "about this type of alcohol blurb"
  const configDescription = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key': '18340cd79amsh1c44c2fa78fcea5p1078b1jsn75937a334342',
      useQueryString: true,
    },
    params: {
      i: selection,
    },
  };

  useEffect(() => {
    axios(configDescription)
      .then((res) => setAlcohol(res.data.ingredients[0]))
      .catch(console.error);
  }, []);

  const configSelectedDrinks = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key': '18340cd79amsh1c44c2fa78fcea5p1078b1jsn75937a334342',
      useQueryString: true,
    },
    params: {
      i: selection,
    },
  };

  useEffect(() => {
    axios(configSelectedDrinks)
      .then((res) => setAlcoholDrinks(res.data.drinks))
      .catch(console.error);
  }, []);

  if (!alcohol || !alcoholDrinks) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row>
          <Col>{alcohol.strDescription}</Col>
          <Col>
            {alcoholDrinks.map((drink) => (
              <ul>
                <li className='alcoholDrinkListLink' key={drink.idDrink}>
                  <div className='alcoholDrinkList'>
                    <img
                      src={`${drink.strDrinkThumb}`}
                      height='80'
                      width='80'
                      alt='pic'
                    />
                    <Link
                      to={{
                        pathname: `/drink/${drink.idDrink}`,
                        state: { id: `${drink.idDrink}` },
                      }}
                    >
                      {drink.strDrink}
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Alcohol;
