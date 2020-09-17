import React, { useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Drink = ({ props }) => {
    const [drink, setDrink] = useState(null)

    const getDrink = async () => {
        const config = {
            method: "GET",
            url: "https://the-cocktail-db.p.rapidapi.com/lookup.php",
            headers: {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b",
                "useQueryString": true
            }, params: {
                "i": "11054"
            }
        };

        await axios(config)
            .then((res) => setDrink(res.data.drinks))
            .catch(console.error);
    };
    console.log(drink);
    // console.log('str', drink[0].strDrink);

    // const { strDrink } = drink
    if (!drink) {
        console.log('waittt...');
    }
    return (
        <div>
            <Button onClick={getDrink}>click</Button>
            <h3>{drink ? drink[0].strDrink : 'loading...'}</h3>
        </div>
    )
}

export default Drink
