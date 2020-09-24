import React from 'react';
import { Link } from 'react-router-dom';

const DrinkList = (props) => {
<<<<<<< HEAD
  if (!props.drinkData) {
    return <div></div>;
  } else if (props.drinkData === 'None Found') {
    return (
      <div>
        Sorry! no drinks found with those ingredients, try again? Maybe put
        another search bar here?
      </div>
    );
  } else {
    return (
      <div className='drink-list-container'>
        {props.drinkData.map((drink) => (
          <ul className='drink-list-item-container' key={drink.idDrink}>
              <img
                  className='drink-list-image'
                  src={`${drink.strDrinkThumb}`}
                  height='80'
                  width='80'
                  alt='pic'
                />
            <li className='drink-list-text' key={drink.idDrink}>                
                <Link
                  to={{
                    pathname: `/drink/${drink.idDrink}`,
                    state: { id: `${drink.idDrink}` },
                  }}
                >
                  {drink.strDrink}
                </Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};
=======
    if (!props.drinkData) {
        return (<div></div>)
    } else {
        return (
            <div>
                {props.drinkData.map((drink) => (
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
            </div>
        )
    }
}
>>>>>>> working on invalid search input

export default DrinkList;
