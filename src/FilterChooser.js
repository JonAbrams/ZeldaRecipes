import React from "react";

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

function setSearch(space, { target: { value: search }}) {
  return { search };
}

function selectAll({ state }, e) {
  e.preventDefault();

  const selected = {};
  Object.keys(state).forEach(item =>
    selected[item] = true
  );

  return selected;
}

function deselectAll({ state }, e) {
  e.preventDefault();

  const deselected = {};
  Object.keys(state).forEach(item =>
    deselected[item] = false
  );

  return deselected;
}

function FilterChooser({ state, setState, subSpace }) {
  const ingredients = Object.keys(state.ingredients);
  const effects = Object.keys(state.effects);

  return (
    <div className="filter-chooser">
      <input
        type="search"
        placeholder="Filter by keyword…"
        value={state.search}
        onChange={setState(setSearch)}
      />
      <div className="ingredients">
        <label>Ingredients:</label>
        <div className="select-deselect-container">
          <a onClick={subSpace('ingredients').setState(selectAll)} href="#">Select All</a>
          |
          <a onClick={subSpace('ingredients').setState(deselectAll)} href="#">Deselect All</a>
        </div>
        <div className="filter-inputs">
          {ingredients.map(ingredient =>
            <label key={ingredient}>
              <input
                type="checkbox"
                value={ingredient}
                checked={state.ingredients[ingredient]}
                onChange={subSpace("ingredients").setState(setIngredient)}
              />
              {ingredient}
            </label>
          )}
        </div>
      </div>
      <div className="effects">
        <label>Effects:</label>
        <div className="select-deselect-container">
          <a onClick={subSpace('effects').setState(selectAll)} href="#">Select All</a>
          |
          <a onClick={subSpace('effects').setState(deselectAll)} href="#">Deselect All</a>
        </div>
        <div className="filter-inputs">
          {effects.map(effect =>
            <label key={effect}>
              <input
                type="checkbox"
                value={effect}
                checked={state.effects[effect]}
                onChange={subSpace("effects").setState(setEffect)}
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
