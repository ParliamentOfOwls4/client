import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Loading from '../Utility/Loading';
import axios from 'axios';
import DrinkList from '../Utility/DrinkList';
import { AiOutlineRead } from 'react-icons/ai';

const Alcohol = (props) => {
  const [alcohol, setAlcohol] = useState(null);
  const [alcoholDrinks, setAlcoholDrinks] = useState(null);
  const [readMore, setReadMore] = useState(false)
  const selection = props.location.state.selection;
  const readMoreCheck = readMore ? <p> (read less) <AiOutlineRead /> </p> : <p> ...read more <AiOutlineRead /></p>

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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, []);




  if (!alcohol || !alcoholDrinks) {
    return <Loading />;
  } else {
    const shortDescription = alcohol.strDescription.substr(0, 500)
    const { strDescription } = alcohol
    return (
      <Container>
        <div className='alcohol-page-title'>{selection}</div>
        <Row>

          <Col xs={4} className='alcohol-page-description'> {readMore ? strDescription : shortDescription }

            < a className='read-more-link' onClick={() => { setReadMore(!readMore) }}>{readMoreCheck} </a>

          </Col>


          <Col xs={8} className='alcohol-page-drink-list'>
            <DrinkList drinkData={alcoholDrinks} />
          </Col>

        </Row>
      </Container >
    );
  }
};

export default Alcohol;
