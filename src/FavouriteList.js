import React from 'react';

function unFavourite(space, event) {
  event.preventDefault();
  return { favourite: false };
}

function FavouriteList({ state: recipes, subSpace }) {
  const favRecipes = recipes.filter(r => r.favourite);

  return (
    <div className="favourite-list">
      {favRecipes.length ? (
        <ul className="favourite-recipes">
          {favRecipes.map(recipe => (
            <FavouriteRecipe key={recipe.name} {...subSpace(recipe.id)} />
          ))}
        </ul>
      ) : (
        <div>You haven&apos;t favourited any recipes.</div>
      )}
    </div>
  );
}

function FavouriteRecipe({ state: recipe, setState }) {
  return (
    <li className="favourite-recipe">
      <button className="recipe-remove" onClick={setState(unFavourite)}>
        <div className="recipe-name">{recipe.name}</div>
        &times;
      </button>
    </li>
  );
}

export default FavouriteList;
