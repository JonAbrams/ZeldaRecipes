import React from "react";

import FavouriteList from "./FavouriteList";
import FilterChooser from "./FilterChooser";
import RecipeList from "./RecipeList";

import "./App.css";

function App({ state, subSpace, setState }) {
  return (
    <div className="App">
      <h1>Zelda: Breath of the Wild – Recipe Browser</h1>
      <div className="app-wrapper">
        <div className="favourite-list">
          <h3>Favourite Recipes</h3>
          <FavouriteList {...subSpace("recipes")} />
        </div>
        <div className="recipe-browser">
          <FilterChooser {...subSpace("filters")} />
          <RecipeList {...subSpace("recipes")} filters={state.filters} />
        </div>
      </div>
    </div>
  );
}

export default App;
