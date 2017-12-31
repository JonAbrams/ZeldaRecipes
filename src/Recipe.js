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
      <img className="recipe-img" src={recipe.imagePath} />
      <div className="recipe-head">
        <button className="favourite-button"
          onClick={setState(toggleFavourite)}
          title={"Click to " + favouriteText}
        >
          {recipe.favourite ? "★" : "☆"}
        </button>
        {recipe.effect && (
          <div className="recipe-effect">(+ {recipe.effect})</div>
        )}
        <div className="recipe-name">
          {recipe.name}
        </div>
       </div>
      <ul className="recipe-ingredients">
        {Object.keys(recipe.ingredients).map(ingredient => (
          <li className="recipe-ingredient" key={ingredient}>
            {recipe.ingredients[ingredient]}  {renderIngredient(ingredient)}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Recipe;
