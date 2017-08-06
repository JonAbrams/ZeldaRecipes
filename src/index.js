import React from 'react';
import ReactDOM from 'react-dom';
import Space from 'spaceace';

import './index.css';
import App from './App';

const rootSpace = new Space({
  favouriteList: {
    favourites: [] // list of ids
  },
  filters: {
    ingredients: {
      Vegetables: true,
      Mushrooms: true,
      Meat: true,
      Herbs: true,
      Dairy: true,
      'Monster Parts': true,
    },
    effects: {
      Stamina: true,
      Haste: true,
      Fire: true,
      Heat: true,
      Cold: true,
      Stealth: true,
      Strength: true,
      Defence: true,
      'Bonus Hearts': true,
    }
  },
  recipes: []
});
ReactDOM.render(<App space={rootSpace} />, document.getElementById('root'));
