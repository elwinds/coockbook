import * as React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import RecipeCard from "../components/recipe-card/RecipeCard";
import classes from "../components/recipe-card/RecipeCard.module.scss";

const CategoryPage = () => {
  const params = useParams();

  const recipes = useTypedSelector((state) => {
    return state.recipe.recipes.filter(
      (recipe) => recipe.strCategory === params.categoryName
    );
  });

  if (!recipes.length)
    return <div className={classes.recipesNotFound}>Рецепты не найдены</div>;

  return (
    <div>
      <div className={classes.recipeCardContainer}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
