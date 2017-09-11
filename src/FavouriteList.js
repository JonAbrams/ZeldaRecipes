import React from 'react';

function unFavourite(space, e) {
  e.preventDefault();
  return { favourite: false };
}

function FavouriteList({ state: recipes, subSpace }) {
  const favRecipes = recipes.filter(r => r.favourite);

  return (
    <div className='favourite-list'>
      {favRecipes.length ?
        <ul className='favourite-recipes'>
          {favRecipes.map(recipe =>
            <FavouriteRecipe
              key={recipe.name}
              {...subSpace(recipe.id)}
            />
          )}
        </ul>
        : <div>You haven't favourited any recipes.</div>
      }
    </div>
  );
}

function FavouriteRecipe({ state: recipe, setState }) {
  return (
    <li>
      <div className='recipe-name'>{recipe.name}</div>
      <button
        className='recipe-remove'
        onClick={setState(unFavourite)}
      >
        &times;
      </button>
    </li>
  );
}

export default FavouriteList;
