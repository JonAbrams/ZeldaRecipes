import React from 'react';

function setIngredient({ state }) {

}

function setEffect({ state }) {

}

function FilterChooser({ state, setState }) {
  const ingredients = Object.keys(state.ingredients);
  const effects = Object.keys(state.effects);

  return (
    <div className="filter-chooser">
      <input type="search" placeholder="Filter by keyword…" />
      <div className="ingredients">
        <label>Ingredients:</label>
        <div className="filter-inputs">
          {ingredients.map(ingredient =>
            <label key={ingredient}>
              <input type="checkbox" onClick={setState(setIngredient)} />
              {ingredient}
            </label>
          )}
        </div>
      </div>
      <div className="effects">
        <label>Effects:</label>
        <div className="filter-inputs">
          {effects.map(effect =>
            <label key={effect}>
              <input type="checkbox" onClick={setState(setEffect)} />
              {effect}
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterChooser;
