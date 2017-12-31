import React from 'react';
import FilterChooser from './FilterChooser';
import RecipeList from './RecipeList';
import { getInitialState } from './initialState';

import './App.css';

function resetFilters(space, event) {
  event.preventDefault();

  return {
    filters: getInitialState().filters,
  };
}

function App({ state, subSpace, setState }) {
  return (
    <div className="App">
      <h1>Zelda: Breath of the Wild – Recipe Browser %</h1>
      <FilterChooser {...subSpace('filters')} />
      <RecipeList
        {...subSpace('recipes')}
        filters={state.filters}
        resetFilters={setState(resetFilters)}
      />
      <div className="footer">
        Created by <a href="https://twitter.com/JonathanAbrams">Jon Abrams</a>{' '}
        and <a href="http://twitter.com/z1v1">Zivi Weinstock</a> to demo{' '}
        <a href="https://github.com/JonAbrams/spaceace">Space Ace</a>
      </div>
    </div>
  );
}

export default App;
