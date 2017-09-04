import React from 'react';

import FavouriteList from './FavouriteList';
import FilterChooser from './FilterChooser';
import RecipeList from './RecipeList';

function App({ state, subSpace, setState }) {
  return (
    <div className="App">
      <h1>Zelda: Breath of the Wild – Recipe Browser</h1>
      <FavouriteList {...subSpace('recipes')} />
      <div className="recipe-browser">
        <FilterChooser {...subSpace('filters')} />
        <RecipeList
          {...subSpace('recipes')}
          filters={state.filters}
        />
      </div>
    </div>
  );
}

export default App;
