import React from "react";

import FavouriteList from "./FavouriteList";
import FilterChooser from "./FilterChooser";
import RecipeList from "./RecipeList";
import { getInitialState } from "./initialState";

import "./App.css";

function resetFilters(space, event) {
  event.preventDefault();

  return {
    filters: getInitialState().filters
  };
}

function App({ state, subSpace, setState }) {
  return (
    <div className="App">
      <h1>Zelda: Breath of the Wild – Recipe Browser %</h1>
      <div className="app-wrapper">
        <div className="favourite-list">
          <h3>^ Favourite Recipes</h3>
          <FavouriteList {...subSpace("recipes")} />
        </div>
        <div className="recipe-browser">
          <FilterChooser {...subSpace("filters")} />
          <RecipeList
            {...subSpace("recipes")}
            filters={state.filters}
            resetFilters={setState(resetFilters)}
          />
        </div>
      </div>
      <div className="footer">
        Created by <a href="https://twitter.com/JonathanAbrams">
          Jon Abrams
        </a>{" "}
        to demo <a href="https://github.com/JonAbrams/spaceace">Space Ace</a>
      </div>
    </div>
  );
}

export default App;
