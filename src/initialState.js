import { recipes } from './data';

export function getInitialState() {
  const ingredients = {};
  const effects = { 'No Effect': true };
  recipes.forEach(recipe => {
    Object.keys(recipe.ingredients).forEach(ingredientStr =>
      ingredientStr
        .split('|')
        .forEach(ingredient => (ingredients[ingredient] = true))
    );
    if (recipe.effect) effects[recipe.effect] = true;
  });

  return {
    favourites: [],
    filters: { search: '', favouritesOnly: false, ingredients, effects },
    recipes: recipes.map(
      // list of names
      recipe => {
        recipe.id = recipe.name;
        return recipe;
      }
    ),
  };
}
