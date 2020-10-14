import React from 'react';
import { Link } from 'react-router-dom';

const DrinkList = (props) => {
  if (!props.drinkData) {
    return <div></div>;
  } else if (props.drinkData === 'None Found') {
    return (
      <div className='none-found-message'>
        <h2>Oops!</h2> We couldn't find any drinks with those ingredients. Try
        formatting your search like "vodka, orange juice, ice". <br />
        <br />
        Click{' '}
        <Link
          className='drink-list-sorry-link'
          to={{
            pathname: '/',
          }}
        >
          here
        </Link>{' '}
        to go back to the home page to try again!
      </div>
    );
  } else {
    return (
      <div className='drink-list-container'>
        {props.drinkData.map((drink) => (
          <Link
            key={drink.idDrink}
            className='drink-list-link'
            to={{
              pathname: `/drink/${drink.idDrink}`,
              state: { id: `${drink.idDrink}` },
            }}
          >
            <ul className='drink-list-item-container' key={drink.idDrink}>
              <img
                className='drink-list-image'
                src={`${drink.strDrinkThumb}`}
                height='80'
                width='80'
                alt='pic'
              />
              <li className='drink-list-text' key={drink.idDrink}>
                {drink.strDrink}
              </li>
            </ul>
          </Link>
        ))}
      </div>
    );
  }
};

export default DrinkList;
