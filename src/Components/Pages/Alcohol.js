import React, { useState, useEffect } from 'react';
import Loading from '../Utility/Loading';
import DrinkList from '../Utility/DrinkList';
import { AiOutlineRead } from 'react-icons/ai';
import { getAlcohol, getAlcoholDrinks } from '../Config';

const Alcohol = (props) => {
  const [alcohol, setAlcohol] = useState(null);
  const [alcoholDrinks, setAlcoholDrinks] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const selection = props.location.state.selection;
  const readMoreCheck = readMore ? (
    <p>
      {' '}
      (read less) <AiOutlineRead />{' '}
    </p>
  ) : (
    <p>
      {' '}
      ...read more <AiOutlineRead />
    </p>
  );

  useEffect(() => {
    getAlcohol(selection)
      .then((res) => setAlcohol(res.data.ingredients[0]))
      .catch(console.error);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAlcoholDrinks(selection)
      .then((res) => setAlcoholDrinks(res.data.drinks))
      .catch(console.error);
    // eslint-disable-next-line
  }, []);

  if (!alcohol || !alcoholDrinks) {
    return <Loading />;
  } else {
    const shortDescription = alcohol.strDescription.substr(0, 500);
    const { strDescription } = alcohol;
    return (
      <div className='alcohol-page-container'>
        <div className='alcohol-page-title'>{selection}</div>
          <div className='alcohol-page-description'>
            {' '}
            {readMore ? strDescription : shortDescription}
            <button
              className='read-more-button'
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMoreCheck}{' '}
            </button>
          </div>

          <div className='alcohol-page-drink-list'>
            <DrinkList drinkData={alcoholDrinks} />
          </div>
      </div>
    );
  }
};

export default Alcohol;
