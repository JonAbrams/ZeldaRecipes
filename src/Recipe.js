import React from 'react';

function toggleFavourite({ state: recipe }) {
  return {
    favourite: !recipe.favourite
  };
}

function Recipe({ state: recipe, setState }) {
  const favouriteText = recipe.favourite ?
    'remove from favourites'
    : 'add to favourites';

  return (
    <div className="recipe">
      <div className="recipe-name">
        {recipe.name}
        <button
          onClick={setState(toggleFavourite)}
          title={'Click to ' + favouriteText}
        >
          {recipe.favourite ? '★' : '☆'}
        </button>
      </div>
      <ul className="recipe-ingredients">
        {Object.keys(recipe.ingredients).map(ingredient =>
          <li key={ingredient}>
            {recipe.ingredients[ingredient]} x {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}
export default Recipe;
