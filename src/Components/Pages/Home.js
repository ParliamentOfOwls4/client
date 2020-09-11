import React, { useState } from 'react';
import axios from 'axios';
import RandomDrinks, { randomDrinks } from '../Drinks/RandomDrinks';

const onSubmit = () => {
  RandomDrinks();
  return <RandomDrinks />;
};

const Home = () => {
  return (
    <div>
      <button onSubmit={onSubmit}>Get 10 random cocktails</button>
      {/* <RandomDrinks /> */}
    </div>
  );
};

export default Home;
