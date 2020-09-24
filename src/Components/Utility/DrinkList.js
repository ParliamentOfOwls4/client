import React from 'react'
import { Link } from 'react-router-dom'

const DrinkList = (props) => {
    console.log('objective', props);
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


export default DrinkList