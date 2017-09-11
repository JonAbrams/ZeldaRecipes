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
        className="filter-search"
        type="text"
        placeholder="Filter by keyword…"
        value={state.search}
        onChange={setState(setSearch)}
      />
      <div className="ingredients">
        <div className="filter-label-section">
          <label>Ingredients</label>
          <div className="select-deselect-container">
            <button onClick={subSpace('ingredients').setState(selectAll)} href="#">Select All</button>
            |
            <button onClick={subSpace('ingredients').setState(deselectAll)} href="#">Deselect All</button>
          </div>
        </div>
        <div className="filter-inputs">
          {ingredients.map(ingredient =>
            <label className="filter-option" key={ingredient}>
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
        <div className="filter-label-section">
          <label>Effects</label>
          <div className="select-deselect-container">
            <button onClick={subSpace('effects').setState(selectAll)} href="#">Select All</button>
            |
            <button onClick={subSpace('effects').setState(deselectAll)} href="#">Deselect All</button>
          </div>
        </div>
        <div className="filter-inputs">
          {effects.map(effect =>
            <label className="filter-option" key={effect}>
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
