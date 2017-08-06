import React from 'react';

import FavouriteList from './FavouriteList';
import FilterChooser from './FilterChooser';
import RecipeList from './RecipeList';

function App({ space }) {
  return (
    <div className="App">
      <FavouriteList {...space.subSpace('favouriteList')} />
      <div className="recipe-browser">
        <FilterChooser {...space.subSpace('filters')} />
        <RecipeList
          {...space.subSpace('recipes')}
          favourites={space.state.favouriteList.favourites}
        />
      </div>
    </div>
  );
}

export default App;
