import * as React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import RecipeCard from "../components/recipe-card/RecipeCard";
import classes from "../components/recipe-card/RecipeCard.module.css";
import { useActions } from "../hooks/useActions";

const CategoryPage = () => {
  const params = useParams();
  const { fetchRecipes } = useActions();

  const recipes = useTypedSelector((state) => {
    return state.recipe.recipes.filter(
      (recipe) => recipe.strCategory === params.categoryName
    );
  });

  React.useEffect(() => {
    if (!recipes.length) {
      fetchRecipes();
    }
  }, []);

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
