import axios from 'axios'


//==========Alcohol.js===========

//   Make request to search alcohol by name to get an "about this type of alcohol blurb"
export const getAlcohol = (selection) => {
    return axios({
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
    })
}

export const getAlcoholDrinks = (selection) => {
    return axios({
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
    })
}

//=============Drink.js==============

// Set up "Lookup full cocktail details by ID" request to API
// with id from clicked Link component in Home.js (params)

export const getDrink = (id) => {
    return axios({
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
            useQueryString: true,
        },
        params: {
            i: `${id}`,
        },
    })
}


//=============Home.js==============

// Make call to Liquor API to fetch 10 random drinks
export const get10Drinks = () => {
    return axios({
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/randomselection.php',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
            useQueryString: true,
        },
    })
}

//===================SearchByIngResult.js======================
export const getSearchResult = (searchInput) => {
    return axios({
        method: 'GET',
        url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
            'x-rapidapi-key': 'ff61de8c3fmshdbbdcfd2003501ep1d77b7jsn0bc9bc4a1b9b',
            useQueryString: true,
        },
        params: {
            i: searchInput,
        },
    })
}