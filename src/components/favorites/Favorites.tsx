import * as React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import RecipeCard from "../recipe-card/RecipeCard";
import classes from "./Favorites.module.scss";


const Favorites = () => {
  const allRecipes = useTypedSelector((state) => state.recipe.recipes);
  const idFavoriteRecipes = useTypedSelector(
    (state) => state.userInfo.favorites
  );

  const filteredRecipes = allRecipes.filter((item) =>
    idFavoriteRecipes.includes(item.idMeal)
  );

  return (
    <div className={classes.favoriteRecipes}>
      <h3 className={classes.favoriteRecipes__title}>FAVORITE RECIPES</h3>
        {idFavoriteRecipes.length !== 0  ? (
          <div className={classes.container}>
            {filteredRecipes.map((recipe) => {
              return <RecipeCard key={recipe.idMeal} recipe={recipe} />;
            })}
          </div>
        ) : (
          <p>No favorite recipes yet</p>
        )}
    </div>
  );
};

export default Favorites;
