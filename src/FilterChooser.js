import React from 'react';

function setIngredient({ state }, { target: { value: ingredient } }) {
  return {
    [ingredient]: !state[ingredient]
  };
}

function setEffect({ state }, { target: { value: effect } }) {
  return {
    [effect]: !state[effect]
  };
}

function FilterChooser({ state, setState, subSpace }) {
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
              <input
                type="checkbox"
                value={ingredient}
                checked={state.ingredients[ingredient]}
                onChange={subSpace('ingredients').setState(setIngredient)}
              />
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
              <input
                type="checkbox"
                value={effect}
                checked={state.effects[effect]}
                onChange={subSpace('effects').setState(setEffect)}
              />
              {effect}
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterChooser;
