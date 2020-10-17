![Jiggy logo](./src/assets/Jiggy.png)

# Welcome to [Jiggy - Drinkology](https://jiggydrinkology.netlify.app/) 

Got a full liquor cabinet and don't know what to make? [Jiggy](https://jiggydrinkology.netlify.app/) can help you. 

## How it works

Jiggy allows you to search for cocktails you can make just by telling us which alcohols and ingredients you have on hand. If you're "Feeling Jiggy", we'll suggest 10 random drinks to make. If you are more curious about the type of liquor you have, select it in the drop-down menu to learn more about it and see drinks you can make. 

## Motivation 

This application is a pandemic-inspired collaboration between three friends: [Ross](https://northross.github.io/), [Dan](https://danpowers24.github.io/), and [Thanh](https://tn-space.github.io/). We wanted to create something that our friends could use to make light of their time stuck inside during quarantine. Jiggy is the tool you've been waiting for to help clear out your booze cupboard.

<br/>
<br/>

![Jiggy Screenshot](./src/assets/Jiggy_screenshot_v2.png)

## Important links
- [Deployed application](https://jiggydrinkology.netlify.app/)
- [The Cocktail DB (RapidAPI)](https://rapidapi.com/thecocktaildb/api/the-cocktail-db)
- [TheCocktailDB (official site)](https://www.thecocktaildb.com/)

## Implemented Technologies

Jiggy is a **React** application that consumes RapidAPI's "The Cocktail DB" API and database. We employed different **Axios** calls to hit various endpoints of the API - all of which are GET requests (v2.x). **useState** and **useEffect** are React hooks that help manage the state of each functional component. Jiggy is styled with **Sass**, allowing for better organization and consistency throughout the application. Jiggy's deployment is managed through a  **CI/CD pipeline**, a benefit being that all merges to the main branch trigger an automatic deploy via **Netlify**. 

## Developer commands

Follow these steps to run the application locally: 
- Clone the repo to a local directory
- Install dependancies by running ```npm install``` 
- Spin up a local server by running ```npm run start```

## Future versions

- If search comes up empty, return drinks with some of the ingredients that the user entered
- Drizly Integration - Allow users to shop for missing ingredients/alcohols
- Allow user to sign in and add drinks to "favorites" list

## Related
- [Getting started with React](https://reactjs.org/docs/getting-started.html)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Sass docs](https://sass-lang.com/documentation)
- [CI/CD basics](https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html)
- [Netlify docs](https://docs.netlify.com/?_ga=2.77197589.1859320663.1602972885-1642630294.1599665819)