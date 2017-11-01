import React from "react";

function setIngredient({ state }, { target: { name: ingredient } }) {
  return {
    [ingredient]: !state[ingredient]
  };
}

function setEffect({ state }, { target: { name: effect } }) {
  return {
    [effect]: !state[effect]
  };
}

function setSearch(space, { target: { value: search } }) {
  return { search };
}

function selectAll({ state }, event) {
  event.preventDefault();

  const selected = {};
  Object.keys(state).forEach(item => (selected[item] = true));

  return selected;
}

function deselectAll({ state }, event) {
  event.preventDefault();

  const deselected = {};
  Object.keys(state).forEach(item => (deselected[item] = false));

  return deselected;
}

function toggleFavouritesOnly({ state }, e) {
  return {
    favouritesOnly: !state.favouritesOnly
  };
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
          <h4>Ingredients *</h4>
          <div className="select-deselect-container">
            <button
              onClick={subSpace("ingredients").setState(selectAll)}
              href="#"
            >
              Select All
            </button>
            <span className="select-separator">–</span>
            <button
              onClick={subSpace("ingredients").setState(deselectAll)}
              href="#"
            >
              Deselect All
            </button>
          </div>
        </div>
        <div className="filter-inputs">
          {ingredients.map(ingredient => (
            <label className="filter-option" key={ingredient}>
              <input
                type="checkbox"
                name={ingredient}
                checked={state.ingredients[ingredient]}
                onChange={subSpace("ingredients").setState(setIngredient)}
              />
              {ingredient}
            </label>
          ))}
        </div>
      </div>
      <div className="effects">
        <div className="filter-label-section">
          <label>Effects</label>
          <div className="select-deselect-container">
            <button onClick={subSpace("effects").setState(selectAll)} href="#">
              Select All
            </button>
            <span className="select-separator">–</span>
            <button
              onClick={subSpace("effects").setState(deselectAll)}
              href="#"
            >
              Deselect All
            </button>
          </div>
        </div>
        <div className="filter-inputs">
          {effects.map(effect => (
            <label className="filter-option" key={effect}>
              <input
                type="checkbox"
                name={effect}
                checked={state.effects[effect]}
                onChange={subSpace("effects").setState(setEffect)}
              />
              {effect}
            </label>
          ))}
        </div>
      </div>
      <label className="filter-favourite">
        <input
          type="checkbox"
          name="favouritesOnly"
          checked={state.favouritesOnly}
          onChange={setState(toggleFavouritesOnly)}
        />
        Favourites Only
      </label>
    </div>
  );
}

export default FilterChooser;
