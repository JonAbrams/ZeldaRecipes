import React from 'react';
import ReactDOM from 'react-dom';
import Space from 'spaceace';

import './index.css';
import App from './App';
import { recipes, ingredients } from './data';

const initialState = {
  favouriteList: {
    favourites: [] // list of ids
  },
  filters: {
    search: '',
    ingredients: ingredients.reduce((obj, ingredient) => {
      obj[ingredient] = true;
      return obj;
    }, {}),
    effects: {
      Stamina: true,
      Haste: true,
      Fire: true,
      Heat: true,
      Cold: true,
      Stealth: true,
      Strength: true,
      Defence: true,
      Hearts: true,
    }
  },
  recipes,
};

const rootSpace = new Space(initialState);

rootSpace.subscribe(causedBy => {
  console.log("Change caused by", causedBy, "new state", rootSpace.state);
  ReactDOM.render(<App space={rootSpace} />, document.getElementById('root'));
});
