import React from 'react';

function filterRecipes(recipes, filters) {
  return recipes.filter(recipe =>
    Object.keys(recipe.ingredients).every(ingredient =>
      filters.ingredients[ingredient]
    ) && (recipe.effect === null || filters.effects[recipe.effect])
  );
}

function RecipeList({ state: recipes, parentSpace, favourites, filters}) {
  debugger;
  const filteredRecipes = filterRecipes(recipes, filters);
  return (
    filteredRecipes.length === 0 ?
      <div className="no-recipes">No recipes match your search</div>
    :
      <ul className="recipe-list">
        {filteredRecipes.map(recipe =>
          <li className="recipe" key={recipe.name}>
            <strong>{recipe.name}</strong>
          </li>
        )}
      </ul>
  );
}

export default RecipeList;
