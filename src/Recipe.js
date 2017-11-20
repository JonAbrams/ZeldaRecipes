import React from "react";

function toggleFavourite({ state: recipe }) {
  return {
    favourite: !recipe.favourite
  };
}

function renderIngredient(ingredient) {
  const ingredients = ingredient.split("|");
  const len = ingredients.length;

  if (len === 1) {
    return ingredients[0];
  } else if (len === 2) {
    return `${ingredients[0]} or ${ingredients[1]}`;
  } else {
    return `${ingredients.slice(0, -1).join(", ")}, or ${ingredients[len - 1]}`;
  }
}

function Recipe({ state: recipe, setState }) {
  const favouriteText = recipe.favourite
    ? "remove from favourites"
    : "add to favourites";

  return (
    <div className="recipe">
      <div className="recipe-name">
        {recipe.name}
        {recipe.effect && (
          <span className="recipe-effect">(+ {recipe.effect})</span>
        )}
        <button
          onClick={setState(toggleFavourite)}
          title={"Click to " + favouriteText}
        >
          {recipe.favourite ? "★" : "☆"}
        </button>
        <img src={recipe.imagePath} />
      </div>
      <ul className="recipe-ingredients">
        {Object.keys(recipe.ingredients).map(ingredient => (
          <li key={ingredient}>
            {recipe.ingredients[ingredient]} x {renderIngredient(ingredient)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Recipe;
