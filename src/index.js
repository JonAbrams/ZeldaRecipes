import React from 'react';
import ReactDOM from 'react-dom';
import Space from 'spaceace';

import './index.css';
import App from './App';
import { recipes } from './data';

const ingredients = {};
recipes.forEach(recipe =>
  Object.keys(recipe.ingredients).forEach(ingredientStr =>
    ingredientStr.split('|').forEach(ingredient =>
      ingredients[ingredient] = true
    )
  )
);

const initialState = {
  favourites: [], // list of names
  filters: {
    search: '',
    ingredients,
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
  recipes: recipes.map(recipe => {
    recipe.id = recipe.name;
    return recipe;
  }),
};
debugger;

const rootSpace = new Space(initialState);

rootSpace.subscribe(causedBy => {
  console.log("Change caused by", causedBy, "new state", rootSpace.state);
  ReactDOM.render(<App {...rootSpace} />, document.getElementById('root'));
});
