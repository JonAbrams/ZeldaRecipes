import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import diff from 'lodash/difference';
import cx from 'classnames';

import Recipe from './Recipe';

function filterRecipes(recipes, filters) {
  return recipes
    .filter(recipe => {
      // Filter by search keyword
      if (filters.search) {
        return (
          recipe.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          Object.keys(recipe.ingredients).some(ingredient =>
            ingredient.toLowerCase().includes(filters.search.toLowerCase())
          )
        );
      } else return true;
    })
    .filter(recipe => {
      // Filter by ingredients and effects
      return (
        Object.keys(recipe.ingredients).some(ingredient =>
          ingredient
            .split('|')
            .some(ingredient => filters.ingredients[ingredient])
        ) &&
        ((recipe.effect === null && filters.effects['No Effect']) ||
          filters.effects[recipe.effect])
      );
    })
    .filter(
      recipe =>
        // Filter by favourites
        filters.favouritesOnly ? recipe.favourite : true
    );
}

function RecipeList({ state: recipes, subSpace, filters, resetFilters }) {
  const filteredRecipes = filterRecipes(recipes, filters);
  const favouriteRecipes = filteredRecipes.filter(recipe => recipe.favourite);
  const remainingRecipes = diff(filteredRecipes, favouriteRecipes);

  return (
    <div>
      <div className={cx('favourites', { hide: !favouriteRecipes.length })}>
        <h3 className="subtitle">Favourites</h3>
        <ReactCSSTransitionGroup
          transitionName="recipe"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          component="ul"
          className="recipe-list"
        >
          {favouriteRecipes.map(recipe => (
            <li className="recipe-list-item" key={recipe.id}>
              <Recipe {...subSpace(recipe.id)} />
            </li>
          ))}
        </ReactCSSTransitionGroup>
      </div>
      {remainingRecipes.length === 0 ? (
        <div className="no-recipes">
          No recipes match your search
          <button className="reset-filters" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      ) : (
        <ReactCSSTransitionGroup
          transitionName="recipe"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          component="ul"
          className="recipe-list"
        >
          {remainingRecipes.map(recipe => (
            <li className="recipe-list-item" key={recipe.id}>
              <Recipe {...subSpace(recipe.id)} />
            </li>
          ))}
        </ReactCSSTransitionGroup>
      )}
    </div>
  );
}

export default RecipeList;
