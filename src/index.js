import React from "react";
import ReactDOM from "react-dom";
import Space from "spaceace";

import "./index.css";
import App from "./App";
import { recipes } from "./data";

const ingredients = {};
const effects = { "No Effect": true };
recipes.forEach(recipe => {
  Object.keys(recipe.ingredients).forEach(ingredientStr =>
    ingredientStr
      .split("|")
      .forEach(ingredient => (ingredients[ingredient] = true))
  );
  if (recipe.effect) effects[recipe.effect] = true;
});

const initialState = {
  favourites: [], // list of names
  filters: {
    search: "",
    favouritesOnly: false,
    ingredients,
    effects
  },
  recipes: recipes.map(recipe => {
    recipe.id = recipe.name;
    return recipe;
  })
};

const rootSpace = new Space(initialState);

rootSpace.subscribe(causedBy => {
  console.log("Change caused by", causedBy, "new state", rootSpace.state);
  ReactDOM.render(<App {...rootSpace} />, document.getElementById("root"));
});
