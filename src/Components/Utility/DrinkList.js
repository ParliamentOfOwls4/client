import React from 'react'
import { Link } from 'react-router-dom'

const DrinkList = (props) => {
    if (!props.drinkData) {
        return (<div></div>)
    } else if (props.drinkData == 'None Found') {
        return (<div>Sorry! no drinks found with those ingredients, try again? Maybe put another search bar here?</div>)
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


export default DrinkList